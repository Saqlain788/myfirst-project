import Button from "./component/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <h1 className="font-bold text-6xl text-red-500">
        My FirstNEXTJS Project
      </h1>
      <p>
        I am learning NextJS which is framework of React - library of
        Javascript.
      </p>

      <div>
        For More information, please click on button.
        <Button />
      </div>
    </main>
  );
}
