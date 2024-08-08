const es = {
  landingScreen: {
    name: "Verde Dulce",
    prompt: "Comida fresca y de alta calidad. Sostenible y de origen local.",
  },
  prompt: "Comida fresca y de alta calidad. Sostenible y de origen local.",
  common: {
    ok: "¡OK!",
    cancel: "Cancelar",
    back: "Atrás",
    logOut: "Cerrar sesión",
  },
  welcomeScreen: {
    postscript:
      "psst — Probablemente esto no es lo que parece tu aplicación. (A menos que tu diseñador te haya entregado estas pantallas, y en ese caso, ¡lánzalo!)",
    readyForLaunch: "Tu aplicación, casi lista para el lanzamiento!",
    exciting: "(¡ohh, esto es emocionante!)",
    letsGo: "¡Vamos!",
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
      content: "No se encontraron datos aún. Intenta hacer clic en el botón para actualizar o recargar la aplicación.",
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
    componentsTab: "Componentes",
  },
}

export default es;