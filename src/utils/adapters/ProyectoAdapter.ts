export const createProyectoAdapter = (apiResponse: any) => {
  const expediente = apiResponse.expediente || {};

  return {
    nombre: apiResponse.nombre || "",
    estatus: apiResponse.status ?? "",
    nombre_obra: apiResponse.nombre_obra || "",
    nombre_programa: expediente.nombre_programa || "",
    clave: apiResponse.clave || "",
    ubicacion: expediente.ubicacion || "",
    problematica: expediente.problematica || "",
    fuente_recurso: expediente.fuente_recurso || "",
    apartado: expediente.apartado || "",
    localidad: expediente.localidad || "",
    municipio: expediente.municipio || "",
    componente: expediente.componente || "",
    subcomponente: expediente.subcomponente || "",
    accion_tipo: expediente.accion_tipo || "",
    sub_accion: expediente.sub_accion || "",
    dependencia_ejecutora:
      expediente.dependencia_ejecutora || "OOMSAPAS de La Paz",
    costo_total: Number(expediente.costo_total || 0),
    federal: Number(expediente.federal || 0),
    estatal: Number(expediente.estatal || 0),
    municipal: Number(expediente.municipal || 0),
    oomsapas: Number(expediente.oomsapas || 0),
    otros: Number(expediente.otros || 0),
    numero_jornales: Number(expediente.numero_jornales || 0),
    periodo_estimado_ejecucion: expediente.periodo_estimado_ejecucion || "",
    forma_ejecucion: expediente.forma_ejecucion || "",
    fecha_inicio: expediente.fecha_inicio
      ? expediente.fecha_inicio.split(" ")[0]
      : "",
    fecha_termino: expediente.fecha_termino
      ? expediente.fecha_termino.split(" ")[0]
      : "",
    descripcion: expediente.descripcion || "",
    metas: expediente.metas || "",
    clave_inegi: expediente.clave_inegi || "",
    grado_marginacion: expediente.grado_marginacion || "",
    total_poblacion: Number(expediente.total_poblacion || 0),
    poblacion_hombres: Number(expediente.poblacion_hombres || 0),
    poblacion_mujeres: Number(expediente.poblacion_mujeres || 0),
    poblacion_indigenas: Number(expediente.poblacion_indigenas || 0),
    poblacion_afromexicana: Number(expediente.poblacion_afromexicana || 0),
    total_beneficiarios: Number(expediente.total_beneficiarios || 0),
    beneficiarios_hombres: Number(expediente.beneficiarios_hombres || 0),
    beneficiarios_mujeres: Number(expediente.beneficiarios_mujeres || 0),
    beneficiarios_indigenas: Number(expediente.beneficiarios_indigenas || 0),
    beneficiarios_afromexicana: Number(
      expediente.beneficiarios_afromexicana || 0
    ),
    adjuntos: apiResponse?.adjuntos,
    archivos: apiResponse?.adjuntos,
    objetivo: apiResponse?.objetivo,
    no_etapas: apiResponse?.no_etapas,
    coords: {
      lat: apiResponse?.coords?.lat,
      lng: apiResponse?.coords?.lng,
    },
  };
};
