import Button from "./component/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <h1 className="font-bold text-6xl text-red-500">
        Hafiz Adeel Mairaj - Allama Sb
      </h1>
      <p>
        I am learning NextJS which is framework of React - library of
        Javascript.
      </p>

      <div>
        For More information, please CONTACT Allama SB (0324-6531898).
        <Button />
      </div>
    </main>
  );
}
