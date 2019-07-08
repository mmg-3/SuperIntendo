let notifyPerm = false

if ('Notification' in window) {
  ;(async function() {
    notifyPerm = await Notification.requestPermission()
  })()
}

export const makeNotification = title => {
  const notif = new Notification(title)
  notif.onclose = () => {
    makeNotification('hey, why did you close me?')
  }
}

export const canNotify = () => {
  return notifyPerm === 'granted'
}
