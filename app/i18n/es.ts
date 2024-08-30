import { Translations } from "./en"

const es: Translations = {
  landingScreen: {
    order: "Ordena Ya",
    name: "Verde Dulce",
    prompt: "Comida fresca y de alta calidad. Sostenible y de origen local.",
  },
  common: {
    ok: "¡OK!",
    cancel: "Cancelar",
    back: "Atrás",
    logOut: "Cerrar sesión",
    logIn: "Log In",
    comingSoon: "¡Próximamente!",
  },
  menuScreen: {
    orderMessage: "Hola, me gustaría hacer un pedido con Verde Dulce.",
    orderMenuItemMessage:
      "Hola, me gustaría hacer un pedido con Verde Dulce. Me gustaría ordenar {{item}}",
  },
  welcomeScreen: {
    postscript:
      "psst — Probablemente esto no es lo que parece tu aplicación. (A menos que tu diseñador te haya entregado estas pantallas, y en ese caso, ¡lánzalo!)",
    readyForLaunch: "Tu aplicación, casi lista para el lanzamiento!",
    exciting: "(¡ohh, esto es emocionante!)",
    letsGo: "¡Vamos!",
  },
  adminScreen: {
    title: "Crear Artículo",
    name: "Nombre",
    category: "Categoría",
    description: "Descripción",
    price: "Precio",
    calories: "Calorías",
    url: "URL",
    subtitle: "Crear un nuevo artículo para el menú.",
    subtitleDelete: "Eliminar un artículo del menú.",
    titleDelete: "Eliminar Artículo",
    descriptionDelete: "¿Estás seguro de que deseas eliminar este artículo?",
  },
  errorScreen: {
    title: "¡Algo salió mal!",
    friendlySubtitle:
      "Esta es la pantalla que tus usuarios verán en producción cuando ocurra un error. Querrás personalizar este mensaje (ubicado en `app/i18n/es.ts`) y probablemente también el diseño (`app/screens/ErrorScreen`). Si deseas eliminar esto por completo, revisa `app/app.tsx` para el componente <ErrorBoundary>.",
    reset: "REINICIAR APP",
    traceTitle: "Error desde la pila de %{name}",
  },
  emptyStateComponent: {
    generic: {
      heading: "Tan vacío... tan triste",
      content:
        "No se encontraron datos aún. Intenta hacer clic en el botón para actualizar o recargar la aplicación.",
      button: "Intentemos esto de nuevo",
    },
  },
  errors: {
    invalidEmail: "Dirección de correo electrónico inválida.",
  },
  loginScreen: {
    logIn: "Iniciar sesión",
    enterDetails:
      "Ingresa tus datos a continuación para desbloquear información secreta. Nunca adivinarás lo que tenemos esperando. O tal vez sí; no es ciencia espacial aquí.",
    emailFieldLabel: "Correo electrónico",
    passwordFieldLabel: "Contraseña",
    emailFieldPlaceholder: "Ingresa tu dirección de correo electrónico",
    passwordFieldPlaceholder: "Contraseña súper secreta aquí",
    tapToLogIn: "¡Toca para iniciar sesión!",
    hint: "Pista: puedes usar cualquier dirección de correo electrónico y tu contraseña favorita :)",
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
    theLatestInReactNative: "We're here to keep you current on all React Native has to offer.",
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
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
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
}

export default es
