"use client";
import { useEffect, useState } from "react";

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟

  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.

  for extra info please read the README.md file in the root of the project.
*/

import ServerCard from "@/components/ServerCard";
import ThemeToggle from "@/components/ThemeToggle";

interface ServerData {
  id: number;
  name: string;
  game: string;
  players: string;
  status: string;
  version: string;
  type: string;
  region: string;
  mods: string[];
}

export default function Home() {
  const [serverData, setServerData] = useState<ServerData[] | null>(
    null
  );
  // you can update this fetching code if required but it's not necessary for the assignment.
  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <main className="max-w-7xl mx-auto pt-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-600">
            Minecraft Server List
          </h1>
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverData ? (
            serverData.map((server) => (
              <ServerCard key={server.id} {...server} />
            ))
          ) : (
            <div className="col-span-full flex justify-center">
              <p className="text-foreground/60">Loading servers...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
