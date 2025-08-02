export function avatarFallbackByUserName(userName: string): string {
  const initials = userName
    .split(' ')
    .map((name, index) => (index === 0 || index === userName.split(' ').length - 1 ? name.charAt(0).toUpperCase() : ''))
    .join('');

  return initials;
}
