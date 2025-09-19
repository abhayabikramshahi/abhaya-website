import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
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
          "https://api.github.com/users/abhayabikramshahi/repos?per_page=100&sort=updated",
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("Unexpected API response:", data);
          // fallback
          const fallback = await fetch("/repos.json");
          const fallbackData = await fallback.json();
          setRepos(fallbackData);
          return;
        }

        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
        try {
          const fallback = await fetch("/repos.json");
          const fallbackData = await fallback.json();
          setRepos(fallbackData);
        } catch (err) {
          setRepos([]);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  // Extract years
  const years = [
    ...new Set(
      repos.map((repo) => new Date(repo.pushed_at).getFullYear().toString())
    ),
  ].sort((a, b) => b - a);

  const filteredRepos =
    selectedYear === "all"
      ? repos
      : repos.filter(
          (repo) =>
            new Date(repo.pushed_at).getFullYear().toString() === selectedYear
        );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className={`text-3xl md:text-4xl font-bold ${themeColors.text}`}>
          Projects
        </h1>
        <p className={`mt-2 text-base ${themeColors.secondary}`}>
          A collection of my work, from open-source contributions to personal
          experiments.
        </p>

        {/* Year Filter */}
        <div className="mt-6">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border text-sm shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
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
      {loading && (
        <p className="text-center text-gray-500 text-sm animate-pulse">
          Fetching repositories...
        </p>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo, i) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`${themeColors.background} rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border ${themeColors.border} relative group`}
          >
            {/* Icon Background */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
              <GlobeAltIcon className="w-28 h-28 absolute -right-6 -bottom-6 rotate-12" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`${themeColors.accent} p-2.5 rounded-lg group-hover:scale-110 transition-transform`}
              >
                <CodeBracketIcon
                  className={`w-6 h-6 ${themeColors.primary}`}
                />
              </div>
              <div>
                <h2 className={`text-lg font-semibold ${themeColors.text}`}>
                  {repo.name}
                </h2>
                <p className={`text-xs ${themeColors.secondary}`}>
                  {repo.language || "Other"}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className={`text-sm ${themeColors.secondary} mb-5`}>
              {repo.description || "No description available."}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 ${themeColors.accent} ${themeColors.text} rounded-full font-medium shadow-sm`}
              >
                View Repo
              </motion.a>
              <span className="text-gray-400">
                {new Date(repo.pushed_at).getFullYear()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
