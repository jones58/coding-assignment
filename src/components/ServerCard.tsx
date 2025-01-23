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
    <div className="bg-background border border-foreground/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-foreground/60">{game}</p>
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
          <span className="text-foreground/60">Players:</span>
          <span className="">{players}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/60">Version:</span>
          <span>{version}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/60">Type:</span>
          <span>{type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/60">Region:</span>
          <span>{region}</span>
        </div>
      </div>

      {mods.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-foreground/60 mb-2">Mods:</p>
          <div className="flex flex-wrap gap-2">
            {mods.map((mod) => (
              <span
                key={mod}
                className="text-xs px-2 py-1 rounded-full bg-foreground/5"
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
