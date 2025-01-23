interface ServerCardProps {
  name: string;
  game: string;
  players: string;
  status: string;
  version: string;
  type: string;
  region: string;
  mods: string[];
}

const ServerCard: React.FC<ServerCardProps> = ({
  name,
  game,
  players,
  status,
  version,
  type,
  region,
  mods,
}) => {
  return (
    <div
      className="bg-background border border-foreground/10 dark:border-purple-800/50 rounded-lg p-6
      hover:shadow-xl hover:border-purple-500/30 dark:hover:border-purple-500
      hover:shadow-purple-200/50 dark:hover:shadow-purple-800/50
      hover:-translate-y-0.5 hover:bg-purple-20/20
      transition-ease-in-ease-out duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1 text-purple-700 dark:text-purple-100">
            {name}
          </h3>
          <p className="text-foreground/60 dark:text-purple-300/60">
            {game}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            status === "online"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-foreground/60 dark:text-purple-300/60">
            Players:
          </span>
          <span className="dark:text-purple-100">{players}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/60 dark:text-purple-300/60">
            Version:
          </span>
          <span className="dark:text-purple-100">{version}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/60 dark:text-purple-300/60">
            Type:
          </span>
          <span className="dark:text-purple-100">{type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/60 dark:text-purple-300/60">
            Region:
          </span>
          <span className="dark:text-purple-100">{region}</span>
        </div>
      </div>

      {mods.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-foreground/60 dark:text-purple-300/60 mb-2">
            Mods:
          </p>
          <div className="flex flex-wrap gap-2">
            {mods.map((mod) => (
              <span
                key={mod}
                className="text-xs px-2 py-1 rounded-full bg-foreground/5 dark:bg-purple-900/30 dark:text-purple-200"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServerCard;
