"use client";
import { useState, useEffect, useRef } from "react";
import { useDuas } from "../hooks/useDuas";
import { useWallOfDuas } from "../hooks/useWallOfDuas";
import Image from "next/image";
import Link from "next/link";

// Extracted Components
import HomeDouasTabsScreen from "../components/screens/HomeDouasTabsScreen";
import ReminderTabScreen from "../components/screens/ReminderTabScreen";
import PersonalizationScreen from "../components/screens/PersonalizationScreen";
import WelcomeAdnanScreen from "../components/screens/WelcomeAdnanScreen";
import SuccessScreen from "../components/screens/SuccessScreen";
import WelcomeScreen2 from "../components/screens/WelcomeScreen2";
import AuthenticDuaSelectionScreen2 from "../components/screens/AuthenticDuaSelectionScreen2";
import DiscussMenuOverlay from "../components/screens/DiscussMenuOverlay";
import LeavesMenuOverlay from "../components/screens/LeavesMenuOverlay";
import AuthenticDuaCategoriesScreen from "../components/screens/AuthenticDuaCategoriesScreen";
import CustomDuaGenerationScreen from "../components/screens/CustomDuaGenerationScreen";
import SpiritualReminderScreen from "../components/screens/SpiritualReminderScreen";
import AuthenticDuasGridScreen from "../components/screens/AuthenticDuasGridScreen";
import MatinSoirDetailsScreen from "../components/screens/MatinSoirDetailsScreen";
import WriteDuaScreen from "../components/screens/WriteDuaScreen";
import ChatbotDiscussionHubScreen from "../components/screens/ChatbotDiscussionHubScreen";
import DuaContentViewerScreen from "../components/screens/DuaContentViewerScreen";
import InteriorDesignSettingsScreen from "../components/screens/InteriorDesignSettingsScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import WallOfDuasScreen from "../components/screens/WallOfDuasScreen";
import DouasTabScreen from "../components/screens/DouasTabScreen";
import ReminderScreen from "../components/screens/ReminderScreen";
import AuthScreen from "../components/screens/AuthScreen";
import HomeScreen from "../components/screens/HomeScreen";
import ZikrPremiumSubscriptionScreen from "@/components/screens/ZikrPremiumSubscriptionScreen";

// Assets
// Note: Use string paths from public/ with next/image instead of server-root imports.

export default function Home() {
  // Dua data and state management
  const {
    categories: duaCategories,
    dailyDua,
    selectedCategory,
    selectedDua,
    showDuaContent,
    selectDuaCategory,
    clearSelection,
    getRecommendedDuas,
  } = useDuas();
  const images = [];
  const selectedImages = [];
  const options = [
    { text: "To learn how to make douas", id: "learn-douas" },
    { text: "To join the douas community", id: "join-community" },
    { text: "By curiosity", id: "curiosity" },
    { text: "To find islamic reminders", id: "islamic-reminders" },
    { text: "For something else", id: "something-else" },
  ];
  // Wall of Duas data and state management
  const {
    displayDuas,
    userLocation,
    settings,
    showLocationSettings,
    showThemeSettings,
    sayAmine,
    toggleLocationSettings,
    toggleThemeSettings,
    formatAmineCount,
    getTimeAgo,
  } = useWallOfDuas();

  const [isLogin, setIsLogin] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcomeAdnanScreen, setShowWelcomeAdnanScreen] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
  const [showPersonalizationScreen, setShowPersonalizationScreen] =
    useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedDouaCategory, setSelectedDouaCategory] =
    useState("Authentic douas");
  const [customDouaText, setCustomDouaText] = useState("");
  const [showWallOfDuas, setShowWallOfDuas] = useState(false);
  const [showAuthenticDuaSelection, setShowAuthenticDuaSelection] =
    useState(false);

  const [showAuthenticDuaCategories, setShowAuthenticDuaCategories] =
    useState(false);
  const [selectedDuaCategory, setSelectedDuaCategory] = useState("");
  const [showDiscussMenu, setShowDiscussMenu] = useState(false);
  const [showCustomDuaGeneration, setShowCustomDuaGeneration] = useState(false);
  const [showSpiritualReminder, setShowSpiritualReminder] = useState(false);
  const [showAuthenticDuasGrid, setShowAuthenticDuasGrid] = useState(false);
  const [showChatbotDiscussionHub, setShowChatbotDiscussionHub] =
    useState(false);
  const [showDuaContentViewer, setShowDuaContentViewer] = useState(false);
  const [showInteriorDesignSettings, setShowInteriorDesignSettings] =
    useState(false);
  const [showLeavesMenu, setShowLeavesMenu] = useState(false);
  const [showLocalDuaContent, setShowLocalDuaContent] = useState(false);
  const [showMatinSoirDetails, setShowMatinSoirDetails] = useState(false);
  const [showWriteDuaScreen, setShowWriteDuaScreen] = useState(false);
  const [writeDuaText, setWriteDuaText] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [discussionInput, setDiscussionInput] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [selectedGridCategory, setSelectedGridCategory] =
    useState("Protection");
  const [selectedMenuItem, setSelectedMenuItem] = useState("Interior design");
  const [selectedReminderCategory, setSelectedReminderCategory] =
    useState("Wudu steps");
  const [showReminderContent, setShowReminderContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [customDuaRequest, setCustomDuaRequest] = useState("");
  const [showGeneratedDua, setShowGeneratedDua] = useState(false);
  const [showFeelingSelector, setShowFeelingSelector] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [zikrPremium,setZikrPremium]=useState(false)
  const [userSettings, setUserSettings] = useState({
    name: "Adnan Fida",
    language: "English",
    gender: "Man",
    reminderTime: "07:00",
    duaOfTheDay: true,
    kindNotifications: true,
    wallNotifications: true,
    amineNotifications: true,
    updates: true,
    newsletter: true,
    textSize: 50,
    sounds: true,
    cloudSave: true,
  });

  // Refs for auto-scroll functionality
  const duaContentRef = useRef<HTMLDivElement>(null!);
  const gridDuaContentRef = useRef<HTMLDivElement>(null!);
  const welcomeAdnanContinueRef = useRef<HTMLDivElement>(null!);

  // Navigation state manager
  const [currentScreen, setCurrentScreen] = useState("auth");
  const [navigationHistory, setNavigationHistory] = useState<string[]>([
    "auth",
  ]);

  // Debug Wall of Duas state
  useEffect(() => {
    console.log("Wall of Duas Debug:", {
      showWallOfDuas,
      activeTab,
      showHomeScreen,
      currentScreen,
      condition: showWallOfDuas && activeTab === "Douas" && showHomeScreen,
    });
  }, [showWallOfDuas, activeTab, showHomeScreen, currentScreen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Centralized navigation function
  const navigateToScreen = (
    screenName: string,
    options: Record<string, string | boolean | number> = {}
  ) => {
    console.log("Navigating to:", screenName, options);

    // Reset all screen states (except showWallOfDuas for wall-of-duas navigation)
    setShowEmailForm(false);
    setShowWelcomeAdnanScreen(false);
    setShowSuccessScreen(false);
    setShowWelcomeScreen(false);
    setShowPersonalizationScreen(false);
    setShowHomeScreen(false);
    setShowAuthenticDuaSelection(false);
    setShowDiscussMenu(false);
    setShowCustomDuaGeneration(false);
    setShowSpiritualReminder(false);
    setShowAuthenticDuasGrid(false);
    setShowChatbotDiscussionHub(false);
    setShowDuaContentViewer(false);
    setShowInteriorDesignSettings(false);
    setShowMatinSoirDetails(false);
    setShowWriteDuaScreen(false);
    if (screenName !== "wall-of-duas") {
      setShowWallOfDuas(false);
    }
    setShowReminderContent(false);
    setShowGeneratedDua(false);
    setShowLeavesMenu(false);
    setShowFeelingSelector(false);

    // Update navigation history
    setNavigationHistory((prev) => [...prev, screenName]);
    setCurrentScreen(screenName);

    // Set the appropriate screen state
    switch (screenName) {
      case "auth":
        // Default state - all screens are false
        break;
      case "welcome-adnan":
        setShowWelcomeAdnanScreen(true);
        break;
      case "success":
        setShowSuccessScreen(true);
        break;
      case "welcome":
        setShowWelcomeScreen(true);
        break;
      case "personalization":
        setShowPersonalizationScreen(true);
        break;
      case "home":
        setShowHomeScreen(true);
        setActiveTab("Home");
        break;
      case "douas":
        setShowHomeScreen(true);
        setActiveTab("Douas");
        break;
      case "reminder":
        setShowHomeScreen(true);
        setActiveTab("Reminder");
        setShowReminderContent(true)
        break;
      case "profile":
        setShowHomeScreen(true);
        setActiveTab("Profile");
        break;
      case "wall-of-duas":
        console.log("Setting Wall of Duas states...");
        setShowHomeScreen(true);
        setActiveTab("wallOfDua");
        setShowWallOfDuas(true);
        console.log(
          "Wall of Duas states set - showHomeScreen: true, activeTab: Douas, showWallOfDuas: true"
        );
        break;
      case "authentic-dua-selection":
        setShowAuthenticDuaSelection(true);
        break;
      case "custom-dua-generation":
        setShowCustomDuaGeneration(true);
        break;
      case "spiritual-reminder":
        setShowSpiritualReminder(true);
        if (options.category && typeof options.category === "string") {
          setSelectedReminderCategory(options.category);
        }
        break;
      case "authentic-duas-grid":
        setShowAuthenticDuasGrid(true);
        break;
      case "chatbot-discussion-hub":
        setShowChatbotDiscussionHub(true);
        break;
      case "dua-content-viewer":
        setShowDuaContentViewer(true);
        if (options.category && typeof options.category === "string") {
          setSelectedGridCategory(options.category);
        }
        break;
      case "interior-design-settings":
        setShowInteriorDesignSettings(true);
        break;
      case "matin-soir-details":
        setShowMatinSoirDetails(true);
        break;
      case "write-dua":
        setShowWriteDuaScreen(true);
        break;
      case "email-form":
        setShowEmailForm(true);
        break;
      case "zikrPremium":
        setZikrPremium(true);
        break;
      default:
        console.warn("Unknown screen:", screenName);
        // Fallback to auth screen
        setCurrentScreen("auth");
        break;
    }
  };

  // Navigation helper functions
  const goBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current screen
      const previousScreen = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      navigateToScreen(previousScreen);
    } else {
      // Fallback to auth if no history
      navigateToScreen("auth");
    }
  };

  const resetToAuth = () => {
    setNavigationHistory(["auth"]);
    navigateToScreen("auth");
    setIsLogin(false);
    setUserName("");
    setSelectedInterests(["douas", "community"]);
    setActiveTab("Home");
    setChatInput("");
    setDiscussionInput("");
    setSelectedDuaCategory("To protect kids");
    setSelectedGridCategory("Protection");
  };

  const handleEmailAuth = () => {
    navigateToScreen("email-form");
  };

  const handleGoogleAuth = () => {
    // TODO: Implement Google authentication
    console.log("Google authentication");
  };

  const handleAppleAuth = () => {
    // TODO: Implement Apple authentication
    console.log("Apple authentication");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    // TODO: Implement sign up logic
    console.log("Sign up with:", formData);
    // Store user name and redirect to welcome adnan screen after successful registration
    setUserName(formData.name);
    navigateToScreen("welcome-adnan");
  };

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log("Login with:", loginData);
    // For login, use a default name or stored name
    setUserName("Adnan"); // Default name for login users
    navigateToScreen("welcome");
  };

  const handleBackToOptions = () => {
    navigateToScreen("auth");
  };

  const handleWelcomeAdnanContinue = () => {
    // Navigate from welcome adnan screen to success screen
    navigateToScreen("success");
  };

  const handleContinue = () => {
    // Navigate from welcome screen to personalization screen
    navigateToScreen("personalization");
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest)) {
        return prev.filter((item) => item !== interest);
      } else if (prev.length < 3) {
        return [...prev, interest];
      }
      return prev; // Don't add if already 3 selected
    });
  };

  const handlePersonalizationContinue = () => {
    // Save user preferences and navigate to main app home screen
    console.log("User preferences:", selectedInterests);
    navigateToScreen("home");
  };

  const handleWallOfDuasClick = () => {
    navigateToScreen("wall-of-duas");
  };

  const handleLeavesMenuToggle = () => {
    setShowLeavesMenu(!showLeavesMenu);
  };

  const handleLeavesMenuItemSelect = (item: string) => {
    console.log("Selected leaves menu item:", item);
    setShowLeavesMenu(false);

    // Handle navigation based on selected item using centralized navigation
    switch (item) {
      case "Home":
        navigateToScreen("home");
        break;
      case "Douas":
        navigateToScreen("douas");
        break;
      case "Reminder":
        navigateToScreen("reminder");
        break;
      case "Discuss":
        handleDiscussClick();
        break;
      case "Profile":
        navigateToScreen("profile");
        break;
      case "Settings":
        navigateToScreen("interior-design-settings");
        break;
      case "Wall of Duas":
        navigateToScreen("wall-of-duas");
        break;
      case "Chatbot":
        navigateToScreen("chatbot");
        break;
      case "Back":
        goBack();
        break;
      default:
        console.warn("Unknown menu item:", item);
        break;
    }
  };

  const handleChatSubmit = () => {
    if (chatInput.trim()) {
      console.log("Chat message:", chatInput);
      // Here you would typically send the message to your AI backend
      setChatInput("");
    }
  };

  const handleDuaCategorySelect = (category: string) => {
    setSelectedDuaCategory(category);

    // Check if the category exists in our duaContent object and show content
    if (category in duaContent) {
      setShowLocalDuaContent(true);

      // Auto-scroll to dua content after selection
      setTimeout(() => {
        gridDuaContentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      setShowLocalDuaContent(false);
    }

    console.log("Selected dua category:", category);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log("Audio playback:", !isPlaying ? "playing" : "paused");
  };

  const handleDuaAction = (action: string) => {
    console.log("Dua action:", action);
    if (action === "Discuss") {
      clearSelection(); // Clear dua selection using the hook
      handleDiscussClick();
    }
    // Handle different actions like save, share, etc.
  };

  const handleMenuItemSelect = (item: string) => {
    setSelectedMenuItem(item);
    console.log("Selected menu item:", item);
    setShowLeavesMenu(false); // Close leaves menu
    setShowDiscussMenu(false); // Close side menu if open

    // Handle navigation to different sections using centralized navigation
    switch (item) {
      case "Discuss":
        handleDiscussClick();
        break;
      case "Duas":
        navigateToScreen("authentic-duas-grid");
        break;
      case "Reminders":
        navigateToScreen("reminder");
        break;
      case "My notes":
        console.log("Navigate to notes section");
        // TODO: Implement notes navigation
        break;
      case "The wall of duas":
        navigateToScreen("wall-of-duas");
        break;
      case "My profile":
        navigateToScreen("profile");
        break;
      case "Interior design":
        navigateToScreen("interior-design-settings");
        break;
      case "My.Zikr+":
        console.log("Navigate to premium subscription");
        // TODO: Implement premium navigation
        navigateToScreen('zikrPremium')
        break;
      case "Back":
        goBack();
        break;
      default:
        console.warn("Unknown menu item:", item);
        break;
    }
  };

  const handleCloseDiscussMenu = () => {
    setShowDiscussMenu(false);
  };

  const handleCustomDuaSubmit = () => {
    if (customDuaRequest.trim()) {
      console.log("Custom dua request:", customDuaRequest);
      setShowGeneratedDua(true);
      // Here you would typically send the request to your AI backend
    }
  };

  const handleCustomDuaAction = (action: string) => {
    console.log("Custom dua action:", action);
    if (action === "Another one") {
      setShowGeneratedDua(false);
      setCustomDuaRequest("");
    } else if (action === "Main menu") {
      setShowCustomDuaGeneration(false);
      setShowGeneratedDua(false);
      setCustomDuaRequest("");
      setShowHomeScreen(true);
    }
    // Handle other actions like save, share, etc.
  };

  const handlePublishDua = () => {
    if (writeDuaText.trim()) {
      console.log("Publishing dua:", writeDuaText);
      // TODO: Send dua to backend for review
      // For now, just show success message and navigate back
      alert("Your dua has been submitted for review. Thank you for sharing!");
      setWriteDuaText("");
      setShowWriteDuaScreen(false);
      setShowHomeScreen(true);
    }
  };

  const handleReminderCategorySelect = (category: string) => {
    setSelectedReminderCategory(category);
    setShowReminderContent(true);
    console.log("Selected reminder category:", category);
  };

  const handleReminderAction = (action: string) => {
    console.log("Reminder action:", action);
    if (action === "Another reminder") {
      setShowReminderContent(false);
    } else if (action === "Discuss") {
      handleDiscussClick();
    }
    // Handle other actions
  };

  const handleDuaCategoryGridSelect = (category: string) => {
    console.log("Selected dua category from grid:", category);
    setSelectedGridCategory(category);

    // If it's "Matin & Soir", go to the detailed list screen
    if (category === "Matin & Soir") {
      setShowAuthenticDuasGrid(false);
      setShowMatinSoirDetails(true);
    } else {
      setShowAuthenticDuasGrid(false);
      setShowDuaContentViewer(true);
    }
  };

  const handleWallOfDuasFromGrid = () => {
    console.log("Navigate to Wall of Duas from grid");
    navigateToScreen("wall-of-duas");
  };

  const handleBackFromDiscussionHub = () => {
    // Navigate back to previous screen (could be from various sources)
    setShowChatbotDiscussionHub(false);
    setDiscussionInput("");
    // Return to home screen by default
    setShowHomeScreen(true);
  };

  const handleDiscussionSubmit = () => {
    if (discussionInput.trim()) {
      console.log("Discussion message:", discussionInput);
      // Here you would typically send the message to your AI backend
      setDiscussionInput("");
    }
  };

  const handleQuickAction = (action: string) => {
    console.log("Quick action:", action);
    // Handle different quick actions
    switch (action) {
      case "See my saved duas":
        console.log("Navigate to saved duas");
        break;
      case "Talk to support":
        console.log("Navigate to support");
        break;
      case "Check my notes":
        console.log("Navigate to notes");
        break;
      case "See the whole duas collection":
        setShowAuthenticDuasGrid(true);
        setShowChatbotDiscussionHub(false);
        break;
      case "See the whole reminders collection":
        setShowSpiritualReminder(true);
        setShowChatbotDiscussionHub(false);
        break;
      case "See the wall of duas":
        navigateToScreen("wall-of-duas");
        break;
      default:
        break;
    }
  };

  const handleResetToAuth = () => {
    // Reset to initial authentication state using centralized navigation
    resetToAuth();
    setSelectedMenuItem("Interior design");
    setSelectedReminderCategory("Wudu steps");
    setShowReminderContent(false);
    setIsPlaying(false);
    setCustomDuaRequest("");
    setShowGeneratedDua(false);
    setAudioProgress(0);
    setFormData({ name: "", email: "", password: "" });
    setLoginData({ email: "", password: "" });
  };

  const handleBackFromDuaContentViewer = () => {
    setShowDuaContentViewer(false);
    setShowAuthenticDuasGrid(true);
  };

  const handleBackFromInteriorDesignSettings = () => {
    setShowInteriorDesignSettings(false);
    setShowDiscussMenu(true);
  };

  const handleAudioPlay = () => {
    setIsPlaying(!isPlaying);
    // Here you would integrate with actual audio playback
  };

  const handleSettingToggle = (setting: string) => {
    setUserSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev],
    }));
  };

  const handleSettingChange = (
    setting: string,
    value: string | number | boolean
  ) => {
    setUserSettings((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const handleOptionSelect = (option: string) => {
    console.log("Selected option:", option);
    // Handle navigation based on selected option
    switch (option) {
      case "authentic-dua":
        navigateToScreen("authentic-dua-selection");
        break;
      case "custom-dua":
        navigateToScreen("custom-dua-generation");
        break;
      case "spiritual-reminder":
        navigateToScreen("spiritual-reminder");
        break;
      default:
        console.warn("Unknown option:", option);
        break;
    }
  };

  const handleCustomMessageSubmit = () => {
    if (customMessage.trim()) {
      console.log("Custom message:", customMessage);
      // Navigate to chat with the custom message context
      navigateToScreen("chatbot");
      setCustomMessage("");
    }
  };

  const handleBackFromAuthenticDuaCategories = () => {
    setShowAuthenticDuaCategories(false);
    setShowPersonalizationScreen(true);
  };

  const handleToProtectKidsCategorySelect = (category: string) => {
    console.log("Selected dua category:", category);
    setSelectedDuaCategory(category);
    // Navigate to dedicated dua content viewer screen using centralized navigation
    navigateToScreen("dua-content-viewer", { category });
  };

  // Universal discussion handler - can be called from any screen
  const handleDiscussClick = () => {
    console.log("Navigating to discussion section...");
    // Clear all other screens
    setShowHomeScreen(false);
    setShowWelcomeScreen(false);
    setShowPersonalizationScreen(false);
    setShowAuthenticDuaCategories(false);
    setShowAuthenticDuaSelection(false);
    setShowDiscussMenu(false);
    setShowCustomDuaGeneration(false);
    setShowSpiritualReminder(false);
    setShowAuthenticDuasGrid(false);
    setShowDuaContentViewer(false);
    setShowInteriorDesignSettings(false);
    setShowWallOfDuas(false);
    setShowEmailForm(false);

    // Show discussion hub
    setShowChatbotDiscussionHub(true);
  };

  const handleToProtectKidsDuaAction = (action: string) => {
    console.log("Dua action:", action);
    switch (action) {
      case "Save it":
        console.log("Saving dua...");
        break;
      case "Share it":
        console.log("Sharing dua...");
        break;
      case "Pounder it":
        console.log("Pondering dua...");
        break;
      case "Another one":
        console.log("Loading another dua...");
        break;
      case "The whole collection":
        console.log("Opening collection...");
        break;
      case "Main menu":
        handleBackFromAuthenticDuaCategories();
        break;
      case "Discuss":
        handleDiscussClick();
        break;
      default:
        console.warn("Unknown action:", action);
        break;
    }
  };

  const interests = [
    {
      id: "douas",
      icon: "📖",
      text: "To learn how to make douas",
    },
    {
      id: "community",
      icon: "🤲",
      text: "To join the douas community",
    },
    {
      id: "curiosity",
      icon: "🔍",
      text: "By curiosity",
    },
    {
      id: "reminders",
      icon: "📅",
      text: "To find islamic reminders",
    },
    {
      id: "other",
      icon: "🌍",
      text: "For something else",
    },
  ];

  // Dua content data
  const duaContent = {
    "To protect kids": {
      arabic:
        "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
      transliteration:
        "U'eedhukumaa bi-kalimaati l-laahi t-taammaati min kulli shaytaanin wa haammatin wa min kulli 'aynin laammatin",
      translation:
        "I seek protection for you from the perfect words of Allah against every devil and poisonous creature, and against every evil eye.",
      source:
        "[1] al-Bukhari N°6312, voir Fath al-Bari 11/113, et Muslim (N°2711, 4/2083).",
    },
    Anxiety: {
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
      transliteration: "Allaahumma innee a'oodhu bika minal-hammi wal-hazan",
      translation: "O Allah, I seek refuge in You from anxiety and grief.",
      source: "[1] al-Bukhari N°6369, Muslim N°2706.",
    },
    "For forgiveness": {
      arabic: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي",
      transliteration: "Rabbi ghfir lee dhanbee wa khata'ee wa jahlee",
      translation: "My Lord, forgive my sins, my mistakes, and my ignorance.",
      source: "[1] al-Bukhari N°6398, Muslim N°2719.",
    },
    // Add more duas as needed
  };

  // Menu items data
  const menuItems = [
    { id: "discuss", icon: "/Popup/2.svg", text: "Discuss" },
    { id: "duas", icon: "/Popup/1.png", text: "Duas" },
    { id: "reminders", icon: "/Popup/4.png", text: "Reminders" },
    { id: "notes", icon: "/Popup/5.png", text: "My notes" },
    { id: "wall", icon: "/Popup/7.png", text: "The wall of duas" },
    { id: "profile", icon: "/Popup/3.svg", text: "My profile" },
    { id: "interior", icon: "/Popup/6.png", text: "Interior design" },
  ];

  // Reminder content data
  const reminderContent = {
    "Wudu steps": {
      title: "Wudu steps",
      description:
        'Purity is the gateway to prayer. Here\'s a simple guide to help you perform Wudu step-by-step with presence and mindfulness. May Allah accept your prayer. Prophet Muhammad ﷺ said: "Purity is half of faith." (Sahih Muslim 223)',
      downloadLink: "Download wudu step pdf",
    },
    "Ghusl steps": {
      title: "Ghusl steps",
      description:
        "Complete purification guide for major ritual cleansing. Follow these steps with intention and mindfulness.",
      downloadLink: "Download ghusl step pdf",
    },
    "Prayer steps": {
      title: "Prayer steps",
      description:
        "Step-by-step guide to performing Salah with proper movements and recitations.",
      downloadLink: "Download prayer step pdf",
    },
    // Add more reminders as needed
  };

  // Matin & Soir Duas List
  const matinSoirDuas = [
    { id: 1, title: "Lorsque l'on se réveille", count: "4" },
    { id: 27, title: "Invocation du matin", count: "2" },
    { id: 28, title: "Invocation du soir", count: "3" },
    { id: 29, title: "Avant de dormir", count: "5" },
    { id: 30, title: "Lorsque l'on se couche", count: "2" },
    { id: 31, title: "Invocation contre l'insomnie", count: "1" },
    { id: 32, title: "Lorsque l'on fait un rêve", count: "3" },
    { id: 33, title: "Invocation de protection nocturne", count: "2" },
    { id: 34, title: "Dhikr avant le sommeil", count: "4" },
    { id: 35, title: "Invocation au réveil nocturne", count: "1" },
    { id: 36, title: "Tasbih du matin", count: "3" },
    { id: 37, title: "Tasbih du soir", count: "3" },
    { id: 38, title: "Istighfar matinal", count: "2" },
    { id: 39, title: "Protection divine quotidienne", count: "1" },
    { id: 40, title: "Bénédiction de la journée", count: "2" },
  ];

  // Authentic Duas Categories for Grid (French as in screenshot)
  const authenticDuaCategories = [
    {
      id: 1,
      icon: "/AuthenticDuas/1.png",
      name: "Tout",
      chapters: "132 chapitres",
    },
    {
      id: 2,
      icon: "/AuthenticDuas/1.png",
      name: "Matin & Soir",
      chapters: "15 chapitres",
    },
    {
      id: 3,
      icon: "/AuthenticDuas/1.png",
      name: "Maison & Famille",
      chapters: "12 chapitres",
    },
    {
      id: 4,
      icon: "/AuthenticDuas/1.png",
      name: "Nourriture",
      chapters: "8 chapitres",
    },
    {
      id: 5,
      icon: "/AuthenticDuas/1.png",
      name: "Voyage",
      chapters: "6 chapitres",
    },
    {
      id: 6,
      icon: "/AuthenticDuas/1.png",
      name: "Mosquée",
      chapters: "10 chapitres",
    },
    {
      id: 7,
      icon: "/AuthenticDuas/1.png",
      name: "Nature",
      chapters: "7 chapitres",
    },
    {
      id: 8,
      icon: "/AuthenticDuas/1.png",
      name: "Santé",
      chapters: "14 chapitres",
    },
    {
      id: 9,
      icon: "/AuthenticDuas/1.png",
      name: "Protection",
      chapters: "18 chapitres",
    },
    {
      id: 10,
      icon: "/AuthenticDuas/1.png",
      name: "Émotions",
      chapters: "11 chapitres",
    },
    {
      id: 11,
      icon: "/AuthenticDuas/1.png",
      name: "Adoration",
      chapters: "20 chapitres",
    },
    {
      id: 12,
      icon: "/AuthenticDuas/1.png",
      name: "Autres",
      chapters: "11 chapitres",
    },
  ];

  // Extended dua content data for different categories
  const duaContentGrid = {
    Protection: {
      title: "To protect kids",
      arabic:
        "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
      transliteration:
        "U'eedhukumā bi-kalimāti l-lāhi t-tāmmāti min kulli shaytānin wa hāmmatin wa min kulli 'aynin lāmmatin",
      translation:
        "I seek refuge for you both in the perfect words of Allah from every devil and poisonous pest and from every evil, harmful, envious eye.",
      source: "Sahih al-Bukhari 3371",
    },
    "Matin & Soir": {
      title: "Morning & Evening",
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
      transliteration: "Aṣbaḥnā wa aṣbaḥa l-mulku lillāhi wa l-ḥamdu lillāhi",
      translation:
        "We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah.",
      source: "Sahih Muslim 2723",
    },
    "Maison & Famille": {
      title: "Home & Family",
      arabic:
        "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
      transliteration:
        "Bismi llāhi walajna wa bismi llāhi kharajna wa 'alā llāhi rabbinā tawakkalnā",
      translation:
        "In the name of Allah we enter and in the name of Allah we leave, and upon Allah, our Lord, we place our trust.",
      source: "Abu Dawud 5096",
    },
  };

  // Profile Dua Categories Content
  const profileDuaContent = {
    Anxiety: {
      title: "Dua for Anxiety",
      arabic:
        "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
      transliteration:
        "Allāhumma innī a'ūdhu bika mina l-hammi wa l-ḥazani wa l-'ajzi wa l-kasali wa l-bukhli wa l-jubni wa ḍala'i d-dayni wa ghalabati r-rijāl",
      translation:
        "O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from being heavily in debt and from being overpowered by other men.",
      source: "Sahih al-Bukhari 6369",
    },
    Sadness: {
      title: "Dua for Sadness",
      arabic:
        "اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ",
      transliteration:
        "Allāhumma innī 'abduka bnu 'abdika bnu amatika nāṣiyatī biyadika māḍin fiyya ḥukmuka 'adlun fiyya qaḍā'uka",
      translation:
        "O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand, Your command over me is forever executed and Your decree over me is just.",
      source: "Musnad Ahmad 3712",
    },
    "To protect kids": {
      title: "To protect kids",
      arabic:
        "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
      transliteration:
        "U'īdhukumā bi-kalimāti l-lāhi t-tāmmāti min kulli shaytānin wa hāmmatin wa min kulli 'aynin lāmmatin",
      translation:
        "I seek protection for you from the perfect words of Allah against every devil, from every harmful animal (or thing) and from every evil eye.",
      source:
        "[1] al-Bukhari N°6312, voir Fath al-Bari 11/113, et Muslim (N°2711, 4/2083).",
    },
    "When entering home": {
      title: "When entering home",
      arabic:
        "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
      transliteration:
        "Bismi llāhi walajna wa bismi llāhi kharajna wa 'alā llāhi rabbinā tawakkalnā",
      translation:
        "In the name of Allah we enter and in the name of Allah we leave, and upon Allah, our Lord, we place our trust.",
      source: "Abu Dawud 5096",
    },
    "For forgiveness": {
      title: "For forgiveness",
      arabic:
        "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي",
      transliteration:
        "Rabbi ghfir lī dhanbī wa khaṭa'ī wa jahlī wa mā asrartu wa mā a'lantu wa mā anta a'lamu bihi minnī",
      translation:
        "My Lord, forgive me my sin, my ignorance, my transgression and what I have concealed and what I have done openly and what You know better than I.",
      source: "Sahih al-Bukhari 6398",
    },
    "For guidance": {
      title: "For guidance",
      arabic:
        "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ",
      transliteration:
        "Allāhumma hdinī fīman hadayta wa 'āfinī fīman 'āfayta wa tawallanī fīman tawallayta",
      translation:
        "O Allah, guide me among those You have guided, grant me security among those You have granted security and take me into Your care among those You have taken into Your care.",
      source: "Abu Dawud 1425",
    },
  };

  // Navigation validation and fallback
  const validateNavigationState = () => {
    const activeScreens = [
      showHomeScreen,
      showWelcomeScreen,
      showPersonalizationScreen,
      showAuthenticDuaSelection,
      showDuaContent,
      // showDiscussMenu, // REMOVED: Sidebar menu should not count as active screen
      showCustomDuaGeneration,
      showSpiritualReminder,
      showAuthenticDuasGrid,
      showChatbotDiscussionHub,
      showDuaContentViewer,
      showInteriorDesignSettings,
      showMatinSoirDetails,
      showEmailForm,
    ].filter(Boolean);

    // If multiple screens are active or no screens match current state, show fallback
    if (activeScreens.length > 1) {
      console.warn("Multiple screens active, resetting navigation");
      resetToAuth();
      return false;
    }

    return true;
  };

  // Fallback screen component
  const FallbackScreen = () => (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <span className="text-6xl mb-4 block">🍃</span>
        <h2 className="text-2xl text-white font-bold mb-4">Navigation Error</h2>
        <p className="text-gray-300 mb-6">
          Something went wrong with navigation. Let&apos;s get you back on
          track.
        </p>
        <button
          onClick={resetToAuth}
          className="bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors"
        >
          Return to Home
        </button>
      </div>

      {/* Debug info */}
      <div className="text-xs text-gray-500 mt-8">
        <p>Current Screen: {currentScreen}</p>
        <p>Navigation History: {navigationHistory.join(" → ")}</p>
      </div>
    </div>
  );

  return (
    <div
      className={`bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 flex flex-col`}
    >
      {!validateNavigationState() ? (
        <FallbackScreen />
      ) : !isAuthenticated &&
        !showHomeScreen &&
        !showWelcomeScreen &&
        !showPersonalizationScreen &&
        !showAuthenticDuaSelection &&
        !showCustomDuaGeneration &&
        !showSpiritualReminder &&
        !showAuthenticDuasGrid &&
        !showChatbotDiscussionHub &&
        !showDuaContentViewer &&
        !showInteriorDesignSettings &&
        !showMatinSoirDetails &&
        !showWelcomeAdnanScreen &&
        !zikrPremium&&
        !showSuccessScreen ? (
        <AuthScreen
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          showEmailForm={showEmailForm}
          setShowEmailForm={setShowEmailForm}
          formData={formData}
          loginData={loginData}
          handleInputChange={handleInputChange}
          handleLoginInputChange={handleLoginInputChange}
          handleEmailAuth={handleEmailAuth}
          setIsAuthenticated={setIsAuthenticated}
          setShowWelcomeAdnanScreen={setShowWelcomeAdnanScreen}
        />
      ) : showHomeScreen && !showWallOfDuas ? (
        <HomeDouasTabsScreen
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedDouaCategory={selectedDouaCategory}
          setSelectedDouaCategory={setSelectedDouaCategory}
          customDouaText={customDouaText}
          setCustomDouaText={setCustomDouaText}
          showAuthenticDuasGrid={showAuthenticDuasGrid}
          setShowAuthenticDuasGrid={setShowAuthenticDuasGrid}
          handleWallOfDuasClick={handleWallOfDuasClick}
          handleLeavesMenuToggle={handleLeavesMenuToggle}
          showLeavesMenu={showLeavesMenu}
        />
      ) : activeTab === "Douas" && showHomeScreen && !showWallOfDuas ? (
        <HomeDouasTabsScreen
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedDouaCategory={selectedDouaCategory}
          setSelectedDouaCategory={setSelectedDouaCategory}
          customDouaText={customDouaText}
          setCustomDouaText={setCustomDouaText}
          showAuthenticDuasGrid={showAuthenticDuasGrid}
          setShowAuthenticDuasGrid={setShowAuthenticDuasGrid}
          handleWallOfDuasClick={handleWallOfDuasClick}
          handleLeavesMenuToggle={handleLeavesMenuToggle}
          showLeavesMenu={showLeavesMenu}
        />
      ) : activeTab ==='wallOfDua' && showWallOfDuas ? (
        <WallOfDuasScreen
          showDiscussMenu={showDiscussMenu}
          setShowDiscussMenu={setShowDiscussMenu}
          isAuthenticated={isAuthenticated }
          displayDuas={ displayDuas}
          userLocation={userLocation }
          settings={settings}
          showLocationSettings={showLocationSettings}
          showThemeSettings={showThemeSettings }
          toggleLocationSettings={toggleLocationSettings}
          toggleThemeSettings={ toggleThemeSettings}
          sayAmine={ sayAmine}
          formatAmineCount={formatAmineCount}
          navigateToScreen={ navigateToScreen}
          handleDuaAction={ handleDuaAction}
        />
      ) : activeTab === "Reminder" && showHomeScreen ? (
        <ReminderTabScreen
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedReminderCategory={selectedReminderCategory}
          setSelectedReminderCategory={setSelectedReminderCategory}
          showSpiritualReminder={showSpiritualReminder}
          setShowSpiritualReminder={setShowSpiritualReminder}
          setShowHomeScreen={setShowHomeScreen}
          handleLeavesMenuToggle={handleLeavesMenuToggle}
          showLeavesMenu={showLeavesMenu}
        />
      ) : activeTab === "Profile" && showHomeScreen ? (
        <>
          <ProfileScreen
            userName={userName}
            setShowInteriorDesignSettings={setShowInteriorDesignSettings}
            setShowHomeScreen={setShowHomeScreen}
            setActiveTab={setActiveTab}
          />
          <AuthenticDuaCategoriesScreen
            setShowDiscussMenu={setShowDiscussMenu}
            handleBackFromAuthenticDuaCategories={handleBackFromAuthenticDuaCategories}
            selectedDuaCategory={selectedDuaCategory}
            setSelectedDuaCategory={setSelectedDuaCategory}
            handleToProtectKidsCategorySelect={handleToProtectKidsCategorySelect}
            duaContentRef={duaContentRef}
            duaContent={duaContent}
            handleToProtectKidsDuaAction={handleToProtectKidsDuaAction}
          />
        </>
      ) : showAuthenticDuaCategories ? (
        <AuthenticDuaCategoriesScreen
          setShowDiscussMenu={setShowDiscussMenu}
          handleBackFromAuthenticDuaCategories={handleBackFromAuthenticDuaCategories}
          selectedDuaCategory={selectedDuaCategory}
          setSelectedDuaCategory={setSelectedDuaCategory}
          handleToProtectKidsCategorySelect={handleToProtectKidsCategorySelect}
          duaContentRef={duaContentRef}
          duaContent={duaContent}
          handleToProtectKidsDuaAction={handleToProtectKidsDuaAction}
        />
      ) : showPersonalizationScreen ? (
        <PersonalizationScreen
          showPersonalizationScreen={showPersonalizationScreen}
          setShowPersonalizationScreen={setShowPersonalizationScreen}
          setShowWelcomeAdnanScreen={setShowWelcomeAdnanScreen}
          selectedInterests={selectedInterests}
          setSelectedInterests={setSelectedInterests}
          handleOptionSelect={handleOptionSelect}
          customMessage={customMessage}
          setCustomMessage={setCustomMessage}
          handleCustomMessageSubmit={handleCustomMessageSubmit}
        />
      ) : showWelcomeAdnanScreen ? (
        <WelcomeAdnanScreen
          showWelcomeAdnanScreen={showWelcomeAdnanScreen}
          setShowWelcomeAdnanScreen={setShowWelcomeAdnanScreen}
          setShowSuccessScreen={setShowSuccessScreen}
          userName={userName}
          setUserName={setUserName}
          selectedInterests={selectedInterests}
          setSelectedInterests={setSelectedInterests}
          handleWelcomeAdnanContinue={handleWelcomeAdnanContinue}
          welcomeAdnanContinueRef={welcomeAdnanContinueRef}
          options={options}
        />
      ) : showSuccessScreen ? (
        <SuccessScreen
          showSuccessScreen={showSuccessScreen}
          setShowSuccessScreen={setShowSuccessScreen}
          setShowWelcomeScreen={setShowWelcomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          isAuthenticated={isAuthenticated}
          navigateToScreen={navigateToScreen}
        />
      ) : showWelcomeScreen ? (
        <WelcomeScreen2
          showWelcomeScreen={showWelcomeScreen}
          setShowWelcomeScreen={setShowWelcomeScreen}
          setShowAuthenticDuaSelection={setShowAuthenticDuaSelection}
          setShowCustomDuaGeneration={setShowCustomDuaGeneration}
          setShowSpiritualReminder={setShowSpiritualReminder}
          setShowDiscussMenu={setShowDiscussMenu}
          isAuthenticated={isAuthenticated}
          chatInput={chatInput}
          setChatInput={setChatInput}
          handleChatSubmit={handleChatSubmit}
        />
      ) : showAuthenticDuaSelection ? (
        <AuthenticDuaSelectionScreen2
          showAuthenticDuaSelection={showAuthenticDuaSelection}
          setShowAuthenticDuaSelection={setShowAuthenticDuaSelection}
          setShowHomeScreen={setShowHomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          selectedDuaCategory={selectedDuaCategory}
          setSelectedDuaCategory={setSelectedDuaCategory}
          handleDuaCategorySelect={handleDuaCategorySelect}
          showLocalDuaContent={showLocalDuaContent}
          duaContentRef={gridDuaContentRef}
          duaContent={duaContent}
          handlePlayPause={handlePlayPause}
          isPlaying={isPlaying}
          handleDuaAction={handleDuaAction}
        />
      ) : showCustomDuaGeneration ? (
        <CustomDuaGenerationScreen
          setShowCustomDuaGeneration={setShowCustomDuaGeneration}
          setShowHomeScreen={setShowHomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          showGeneratedDua={showGeneratedDua}
          customDuaRequest={customDuaRequest}
          setCustomDuaRequest={setCustomDuaRequest}
          handleCustomDuaSubmit={handleCustomDuaSubmit}
          handleCustomDuaAction={handleCustomDuaAction}
        />
      ) : showSpiritualReminder ? (
        <SpiritualReminderScreen
          setShowSpiritualReminder={setShowSpiritualReminder}
          setShowReminderContent={setShowReminderContent}
          setSelectedReminderCategory={setSelectedReminderCategory}
          setShowHomeScreen={setShowHomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          selectedReminderCategory={selectedReminderCategory}
          showReminderContent={showReminderContent}
          reminderContent={reminderContent}
          handleReminderCategorySelect={handleReminderCategorySelect}
          handleReminderAction={handleReminderAction}
        />
      ) : showAuthenticDuasGrid ? (
        <AuthenticDuasGridScreen
          setShowAuthenticDuasGrid={setShowAuthenticDuasGrid}
          setShowHomeScreen={setShowHomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          authenticDuaCategories={authenticDuaCategories}
          handleDuaCategoryGridSelect={handleDuaCategoryGridSelect}
          handleDiscussClick={handleDiscussClick}
        />
      ) : showMatinSoirDetails ? (
        <MatinSoirDetailsScreen
          setShowMatinSoirDetails={setShowMatinSoirDetails}
          setShowHomeScreen={setShowHomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          matinSoirDuas={matinSoirDuas}
          handleDiscussClick={handleDiscussClick}
        />
      ) : showWriteDuaScreen ? (
        <WriteDuaScreen
          writeDuaText={writeDuaText}
          setWriteDuaText={setWriteDuaText}
          setShowWriteDuaScreen={setShowWriteDuaScreen}
          setShowHomeScreen={setShowHomeScreen}
          handlePublishDua={handlePublishDua}
          setShowDiscussMenu={setShowDiscussMenu}
        />
      ) : showChatbotDiscussionHub ? (
        <ChatbotDiscussionHubScreen
          chatInput={chatInput}
          setChatInput={setChatInput}
          setShowAuthenticDuaSelection={setShowAuthenticDuaSelection}
          setShowHomeScreen={setShowHomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          isAuthenticated={isAuthenticated}
          handleQuickAction={handleQuickAction}
          handleChatSubmit={handleChatSubmit}
          handleBackFromDiscussionHub={handleBackFromDiscussionHub}
        />
      ) : showDuaContentViewer ? (
        <DuaContentViewerScreen
          profileDuaContent={profileDuaContent}
          selectedDuaCategory={selectedDuaCategory}
          setShowDiscussMenu={setShowDiscussMenu}
          setShowAuthenticDuaSelection={setShowAuthenticDuaSelection}
          setShowHomeScreen={setShowHomeScreen}
          handleDiscussClick={handleDiscussClick}
        />
      ) : showInteriorDesignSettings ? (
        <InteriorDesignSettingsScreen
          userSettings={userSettings}
          setShowAuthenticDuaSelection={setShowAuthenticDuaSelection}
          setShowHomeScreen={setShowHomeScreen}
          setShowDiscussMenu={setShowDiscussMenu}
          isAuthenticated={isAuthenticated}
          handleSettingChange={handleSettingChange}
          handleSettingToggle={handleSettingToggle}
          handleDiscussClick={handleDiscussClick}
          handleBackFromInteriorDesignSettings={handleBackFromInteriorDesignSettings}
        />
      ) : zikrPremium ? (
      <ZikrPremiumSubscriptionScreen
        isAuthenticated={isAuthenticated}
        showWelcomeScreen={showWelcomeScreen}
      />
      
      ): (
        <div className="min-h-screen bg-gradient-to-b from-[#0D3B2E] to-[#0B1E3A] flex flex-col items-center justify-start px-4 sm:px-6 py-8">
          {/* Logo and Header Section */}
          <div className="text-center mb-12 mt-10">
            {/* Arabic Calligraphy Logo */}
            <div className="mb-4">
              <div className="text-6xl md:text-7xl text-cream font-arabic mb-2 flex justify-center">
                <Image src="/logo-removebg-preview.png" alt="Logo-Image" width="100" height="100" />
              </div>
            </div>

            {/* App Name */}
            {/* <h1 className="text-2xl md:text-3xl text-cream font-light mb-6">
              My.Zikr
            </h1> */}

            {/* Greeting */}
            {/* Welcome Message */}
            <p
              className={`text-cream text-sm md:text-base mb-4 font-bold max-sm:max-w-[200px] mx-auto ${isLogin ? "opacity-0" : "opacity-100"
                }`}
            >
              Salam Alaykoum and welcome!
            </p>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl text-cream font-bold mb-4">
              {showEmailForm
                ? isLogin
                  ? "Login"
                  : "Register"
                : isLogin
                  ? "Log In"
                  : "Register"}
            </h2>

            {/* Subtitle for Login Form or Toggle Link */}
            {showEmailForm && isLogin ? (
              <p className="text-cream text-[10px] md:text-lg mb-4">
                Sign in to continue.
              </p>
            ) : !showEmailForm ? (
              <p className="text-cream text-[10px] md:text-lg">
                {isLogin ? "Don't have an account? " : "Already Registered? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="italic cursor-pointer hover:underline hover:text-gray-300 transition-colors font-medium"
                >
                  {isLogin ? "Register here" : "Log in here"}
                </button>
              </p>
            ) : null}
          </div>
        </div>
      )}

      {/* Overlay Components */}
      {showDiscussMenu && (
        <DiscussMenuOverlay
          showDiscussMenu={showDiscussMenu}
          setShowDiscussMenu={setShowDiscussMenu}
          handleCloseDiscussMenu={handleCloseDiscussMenu}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
          handleMenuItemSelect={handleMenuItemSelect}
          menuItems={menuItems}
        />
      )}

      {showLeavesMenu && (
        <LeavesMenuOverlay
          showLeavesMenu={showLeavesMenu}
          setShowLeavesMenu={setShowLeavesMenu}
          handleLeavesMenuToggle={handleLeavesMenuToggle}
          handleMenuItemSelect={handleMenuItemSelect}
        />
      )}
    </div>
  );
}
