"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  AlertCircle,
  CheckCircle,
  Loader2,
  BookOpen,
  HelpCircle,
  Github,
  Twitter,
  Mail,
  ChevronDown,
  Users,
  Settings,
  BarChart2,
  Download,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="fixed w-full backdrop-blur-xl bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500"
            />
            <span className="text-xl font-bold text-white">GroupAssign</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {/* Features Menu */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveMenu("features")}
                className="flex items-center space-x-2 text-white/90 hover:text-white py-2"
              >
                <span>Features</span>
                <motion.div
                  animate={{ rotate: activeMenu === "features" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: activeMenu === "features" ? 1 : 0,
                  y: activeMenu === "features" ? 0 : -10,
                }}
                onMouseLeave={() => setActiveMenu(null)}
                className="absolute left-0 w-[400px] mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div>
                    <h3 className="font-medium text-white mb-3">Management</h3>
                    <div className="space-y-3">
                      <motion.a
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                        href="#"
                      >
                        <Users className="w-4 h-4" />
                        <span>Group Assignment</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                        href="#"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Custom Rules</span>
                      </motion.a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-3">Analytics</h3>
                    <div className="space-y-3">
                      <motion.a
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                        href="#"
                      >
                        <BarChart2 className="w-4 h-4" />
                        <span>Reports</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                        href="#"
                      >
                        <Download className="w-4 h-4" />
                        <span>Export Data</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Resources Menu */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveMenu("resources")}
                className="flex items-center space-x-2 text-white/90 hover:text-white py-2"
              >
                <span>Resources</span>
                <motion.div
                  animate={{ rotate: activeMenu === "resources" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: activeMenu === "resources" ? 1 : 0,
                  y: activeMenu === "resources" ? 0 : -10,
                }}
                onMouseLeave={() => setActiveMenu(null)}
                className="absolute right-0 w-[300px] mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="p-6 space-y-4">
                  <motion.a
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">Documentation</div>
                      <div className="text-sm text-white/50">
                        Learn how to use GroupAssign
                      </div>
                    </div>
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <HelpCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Support</div>
                      <div className="text-sm text-white/50">
                        Get help from our team
                      </div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-white/90 hover:text-white"
              >
                Sign In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Features
            </li>
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Pricing
            </li>
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Updates
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-500 hover:text-purple-400">
              About
            </li>
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Blog
            </li>
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Documentation
            </li>
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Help Center
            </li>
            <li className="text-sm text-gray-500 hover:text-purple-400">
              Community
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <Github className="w-5 h-5 text-gray-400 hover:text-purple-400" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400" />
            <Mail className="w-5 h-5 text-gray-400 hover:text-purple-400" />
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800">
        <p className="text-sm text-gray-500">
          © 2025 GroupAssign. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const GroupAssignmentApp = () => {
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [numGroups] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith(".xlsx")) {
      setExcelFile(file);
      setError("");
    } else {
      setError("Please upload a valid Excel file (.xlsx)");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!excelFile) {
      setError("Please upload an Excel file");
      return;
    }

    if (numGroups < 2) {
      setError("Number of groups must be at least 2");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData();
    formData.append("excel_file", excelFile);
    formData.append("num_groups", numGroups.toString());

    try {
      const response = await fetch("http://127.0.0.1:5000/assign-groups", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process files");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "shuffled_students.xlsx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setSuccess(true);
      setExcelFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MegaMenu />

      {/* Decorative Background Blobs */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.15 }}
        whileHover={{ opacity: 0.2, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full bg-purple-600 blur-[128px]"
      />
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.15 }}
        whileHover={{ opacity: 0.2, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[128px]"
      />

      <main className="py-16 px-6 sm:px-8 relative pt-[20vh]  min-h-[90vh]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 relative">
            {/* Decorative elements for heading */}
            <motion.div
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.2, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-purple-500 blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.2, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-blue-500 blur-2xl"
            />

            <h1 className="text-5xl font-bold text-white mb-6 relative z-10">
              Union House Shuffling
            </h1>
            <p className="text-xl text-gray-300 relative z-10">
              Assign students randomly to groups for Union House
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl ring-1 ring-white/20 relative">
            {/* Decorative elements for form card */}
            <motion.div
              initial={{ opacity: 0.05 }}
              whileHover={{ opacity: 0.1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-purple-500 blur-xl"
            />
            <motion.div
              initial={{ opacity: 0.05 }}
              whileHover={{ opacity: 0.1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-blue-500 blur-xl"
            />

            {/* Existing form content */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/* Excel File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Excel File (Required)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-44 border-2 border-dashed rounded-2xl cursor-pointer hover:bg-gray-50/50 transition-all group">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <Upload className="w-12 h-12 text-purple-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-sm text-gray-600 mb-2">
                          {excelFile ? excelFile.name : "Upload Excel file"}
                        </p>
                        <p className="text-xs text-gray-400">
                          .xlsx files only
                        </p>
                      </div>
                      <input
                        type="file"
                        className="opacity-0"
                        accept=".xlsx"
                        onChange={handleExcelUpload}
                      />
                    </label>
                  </div>
                </div>

                {/* Number of Groups Input */}
              </div>

              {/* Alerts */}
              {error && (
                <Alert variant="destructive" className="rounded-xl">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="bg-green-50/50 backdrop-blur-sm text-green-700 border-green-200 rounded-xl">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Groups assigned successfully! Downloading file...
                  </AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !excelFile || numGroups < 2}
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-all duration-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-3" />
                    Processing...
                  </>
                ) : (
                  "Generate Groups"
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroupAssignmentApp;
