"use client";

import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const Logout = () => {
  const [, , removeCookie] = useCookies(["access_token"]);
  const router = useRouter();

  const handleLogout = () => {
    // Hapus cookie token saat logout
    removeCookie("access_token", { path: "/" });

    // Redirect ke halaman login atau halaman lainnya
    router.push("/auth/login");
  };

  // Komponen Logout dapat memiliki tampilan yang kosong atau pesan logout sukses, tergantung kebutuhan Anda
  return null;
};

export default Logout;
