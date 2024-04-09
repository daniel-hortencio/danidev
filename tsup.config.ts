// tsup.config.js
export default {
  // Especifica o ponto de entrada do seu código
  entryPoints: ["src/index.tsx"],
  // Especifica os formatos de saída desejados (pode ser 'cjs', 'esm', 'iife' etc.)
  format: ["cjs", "esm"],
  // Especifica o ambiente de destino (por exemplo, 'node14', 'browser')
  target: "node14",
  // Minificar o código de saída (true/false)
  minify: false,
  // Excluir determinados pacotes do processo de empacotamento
  // (por exemplo, para evitar que pacotes sejam incluídos mais de uma vez)
  external: ["react", "react-dom"],
  // Especifica se o `tsup` deve assistir a mudanças nos arquivos e recompilar automaticamente
  watch: true,
  // Especifica se os arquivos de origem devem ser removidos após a compilação
  clean: true,
  // Outras opções podem ser adicionadas conforme necessário
};
