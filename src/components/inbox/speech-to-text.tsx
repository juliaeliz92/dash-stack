import React from 'react'
import { Mic, Circle } from 'lucide-react'
import type { CustomSpeechRecognition } from '@/types';

function SpeechToText({ getTextFromSpeech }: { getTextFromSpeech: (arg: string) => void}) {
    const [isListening, setIsListening] = React.useState<boolean>(false)
    const recognitionRef = React.useRef<CustomSpeechRecognition>(null);

    const toggleListening = () => {
        if (!recognitionRef.current) return;

        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
    };

    React.useEffect(() =>{
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn("Speech recognition not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";
        recognition.onresult = (event: SpeechRecognitionEvent) => {
            let currentTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                currentTranscript += event.results[i][0].transcript;
            }

            getTextFromSpeech(currentTranscript)
        };

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);

        recognition.onerror = (err: Error) => console.error("Speech Error:", err);

        recognitionRef.current = recognition;

        return () => {
            if (recognitionRef.current) recognitionRef.current.stop();
        };
    }, [])

    return (<div onClick={toggleListening}>
        {isListening ? <Circle size={20} className='text-red-500'/> : <Mic size={20} />}
    </div>)
}

export default SpeechToText