import Typewriter from "typewriter-effect";

export default function Loading() {
  return (
    <Typewriter
        options={{
        strings: ['console.log("Colby Beach")...'],
        autoStart: true,
        loop: true,
        }}
    />
  )
}
