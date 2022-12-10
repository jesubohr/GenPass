export function createNotification(message: string, type = "success") {
  const notification = document.createElement("div")
  notification.classList.add("notification")
  notification.classList.add(type)
  notification.textContent = message

  document.body.appendChild(notification)
  setTimeout(() => {
    notification.classList.add("fade-out")
    setTimeout(() => {
      notification.remove()
    }, 500)
  }, 3000)
}
