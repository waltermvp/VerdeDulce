import { addToCart } from "@/amplify/data/addToCart/graphql/mutations";

const en = {
  landingScreen: {
    name: "Verde Dulce",
    order: "Order",
    comingSoon: "Coming Soon!",
    prompt: "Fresh, high quality. Sourced locally.",
  },
  common: {
    ok: "OK!",
    done: "Done",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
    logIn: "Log In",
    comingSoon: "Coming Soon!",
  },
  menuItemScreen: {
    addToCart: "Add to Bag",
    orderMessage: "Hello, I would like to place an order with Verde Dulce.",
    orderMenuItemMessage:
      "Hola, me gustaría hacer un pedido con Verde Dulce. Me gustaría ordenar {{item}}",
  },
  menuScreen: {
    orderMessage: "Hello, I would like to place an order with Verde Dulce.",
    orderMenuItemMessage:
      "Hola, me gustaría hacer un pedido con Verde Dulce. Me gustaría ordenar {{item}}",
  },
  orderScreen: {
    account: "Account",
    content: "",
  },
  homeScreen: {
    welcome: "Welcome, %{name}.",
    order: "Order Now",
    menu: "Menu",
    loyalty: "Loyalty",
    scan: "Scan",
    account: "Account",
  },
  adminScreen: {
    title: "Create Item",
    name: "Name",
    category: "Category",
    description: "Description",
    price: "Price",
    calories: "Calories",
    url: "URL",
    subtitle: "Create a new item for the menu.",
    subtitleDelete: "Delete an item from the menu.",
    titleDelete: "Delete Item",
    descriptionDelete: "Are you sure you want to delete this item?",
  },
  accountScreen: {
    title: "Welcome to the sweet life",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
    letsGo: "Let's go!",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content:
        "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },

  errors: {
    invalidEmail: "Invalid email address.",
  },
  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative:
      "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoShowroomScreen: {
    jumpStart: "Components to jump start your project!",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via `tx` Prop",
    demoViaSpecifiedTxProp: "Via `{{prop}}Tx` Prop",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel:
        "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  loginScreen: {
    signIn: "Iniciar sesión",
    enterDetails:
      "Ingresa tus detalles abajo para desbloquear información ultrasecreta. Nunca adivinarás lo que tenemos esperando. O quizás sí; no es ciencia espacial.",
    emailFieldLabel: "Correo electrónico",
    passwordFieldLabel: "Contraseña",
    emailFieldPlaceholder: "Ingresa tu dirección de correo electrónico",
    passwordFieldPlaceholder: "Contraseña supersecreta aquí",
    tapToSignIn: "¡Toca para iniciar sesión!",
    hint: "Consejo: puedes usar cualquier dirección de correo y tu contraseña favorita :)",
    venueName: "Nombre del lugar",
    venueNamePlaceholder: "Ingresa el nombre del lugar",
    tapSignUp: "Toca para registrarte",
  },
  signUpScreen: {
    signIn: "Sign Up",
    login: "Login",
    confirm: "Confirm Code",
    enterDetails: "Enter your details to Sign up for GlanceMenu.",
    enterDetailsSignUp: "Enter your details below to sign up to Glance.",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    nameFieldLabel: "Name",
    emailFieldPlaceholder: "Enter your email address",
    passwordFieldPlaceholder: "Super secret password here",
    codePlaceholder: "Super secret code here",
    loginPlaceholder: "Enter your password",
    codeLabel: "Super secret code here",
    tapToSignUp: "Tap to sign up!",
    tapToLogin: "Tap to log in",
    tapToConfirm: "Tap to confirm!",
    hint: "Hint: you can use any email address and your favorite password :)",
    confirmCodeDetails:
      "Please check your email for the confirmation code, then enter it below.",
    resendCode: "Resend Code",
  },
};

export default en;
export type Translations = typeof en;
