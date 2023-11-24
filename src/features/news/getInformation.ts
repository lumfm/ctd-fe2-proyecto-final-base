import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

export default function getInformation() {
  // const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  // const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  // useEffect(() => {
  //   const obtenerInformacion = async (noticias, modal) => {
  //     const respuesta = await obtenerNoticias();

  //     const data = respuesta.map((n) => {
  //       const titulo = n.titulo
  //         .split(" ")
  //         .map((str) => {
  //           return str.charAt(0).toUpperCase() + str.slice(1);
  //         })
  //         .join(" ");

  //       const ahora = new Date();
  //       const minutosTranscurridos = Math.floor(
  //         (ahora.getTime() - n.fecha.getTime()) / 60000
  //       );

  //       return {
  //         id: n.id,
  //         titulo,
  //         descripcion: n.descripcion,
  //         fecha: `Hace ${minutosTranscurridos} minutos`,
  //         esPremium: n.esPremium,
  //         imagen: n.imagen,
  //         descripcionCorta: n.descripcion.substring(0, 100),
  //       };
  //     });

  //     setNoticias(data);
  //   };

  //   obtenerInformacion();
  // }, []);
}
