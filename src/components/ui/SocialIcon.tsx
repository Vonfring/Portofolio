type SocialIconName = "github" | "linkedin" | "email";

type SocialIconProps = {
  name: SocialIconName;
  size?: number;
};

export function SocialIcon({ name, size = 20 }: SocialIconProps) {
  if (name === "email") {
    return <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}><rect height="15" rx="1" stroke="currentColor" strokeWidth="2" width="19" x="2.5" y="4.5" /><path d="m3 6 9 7 9-7" stroke="currentColor" strokeWidth="2" /></svg>;
  }

  if (name === "linkedin") {
    return <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}><path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9.5h3.8V21H3.3V9.5Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.5V9.5Z" /></svg>;
  }

  return <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" /></svg>;
}
