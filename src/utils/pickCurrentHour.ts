export const getCurrentHour = () => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()

  if (currentHour >= 6 && currentHour < 13) {
    return 'Bom dia'
  } else if (currentHour >= 13 && currentHour < 18) {
    return 'Boa tarde'
  } else {
    return 'Boa noite'
  }
}
