import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("all");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/abhayabikramshahi/repos?per_page=100&sort=updated"
        );
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  // Extract years from repos (based on pushed_at)
  const years = [
    ...new Set(
      repos.map((repo) => new Date(repo.pushed_at).getFullYear().toString())
    ),
  ].sort((a, b) => b - a); // sort descending

  // Filter repos by year
  const filteredRepos =
    selectedYear === "all"
      ? repos
      : repos.filter(
          (repo) => new Date(repo.pushed_at).getFullYear().toString() === selectedYear
        );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className={`text-4xl font-bold ${themeColors.text} mb-2`}>
          My Projects
        </h1>
        <p className={`text-lg ${themeColors.secondary}`}>
          Total Repositories:{" "}
          <span className="font-bold">{repos.length}</span> | Showing:{" "}
          <span className="font-bold">{filteredRepos.length}</span>
        </p>

        {/* Year Filter */}
        <div className="mt-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-lg">Loading repositories...</p>}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRepos.map((repo) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className={`${themeColors.background} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${themeColors.border} relative overflow-hidden group`}
          >
            {/* Background Icon */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <GlobeAltIcon className="w-32 h-32 absolute -right-8 -bottom-8 transform rotate-12" />
            </div>

            <div className="flex items-center gap-4 mb-6 relative">
              <div
                className={`${themeColors.accent} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <CodeBracketIcon className={`w-7 h-7 ${themeColors.primary}`} />
              </div>
              <div>
                <h2 className={`text-xl font-semibold ${themeColors.text}`}>
                  {repo.name}
                </h2>
                <p className={`text-sm ${themeColors.secondary}`}>
                  {repo.language || "Unknown Language"}
                </p>
              </div>
            </div>

            <p className={`${themeColors.secondary} mb-6 relative`}>
              {repo.description || "No description provided."}
            </p>

            <div className="flex flex-wrap gap-2 relative border rounded-lg p-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 ${themeColors.accent} ${themeColors.text} rounded-full text-sm font-medium`}
              >
                View Repo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
