import Link from "next/link";

export default function BaseLayout() {
  return (
    <>
      <div className="col">
        <Link href={"/"} replace={true}>
          <span>Нүүр</span>
        </Link>
      </div>
      <div className="col">
        <Link href={"/about"} replace={true}>
          <span>Тухай</span>
        </Link>
      </div>
      <div className="col">
        <Link href={"/contact"}>
          <span>Тусламж</span>
        </Link>
      </div>
      <div className="col">
        <Link href={"/login"}>
          <span>Нэвтрэх</span>
        </Link>
      </div>
      <div className="col">
        <Link href={"/pages/register"}>
          <span>Бүртгүүлэх</span>
        </Link>
      </div>
    </>
  );
}
