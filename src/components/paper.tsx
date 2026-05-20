function Paper({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow ${className || ''}`}>
            {children}
        </div>
    );
}

export default Paper