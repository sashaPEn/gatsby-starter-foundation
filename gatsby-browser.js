export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Ваша версия сайта не обновлена до самой последней  ` +
      `Желаете обновить сайт?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
