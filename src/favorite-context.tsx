import React, { createContext } from 'react';

type FavoriteContextType = {
  favorites: number[];
  updateFavorites: (newFavorites: number[]) => void;
};

const FavoriteContext = createContext<FavoriteContextType>({ favorites: [2, 5, 7], updateFavorites: (newFavorites: number[]) => { void newFavorites; } });

function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = React.useState<number[]>([2, 5, 7]);

    const updateFavorites = (newFavorites: number[]) => {
      setFavorites(newFavorites);
    };

  return (
    <FavoriteContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export { FavoriteContext, FavoriteProvider };