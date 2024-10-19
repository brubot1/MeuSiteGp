const links = []; // Isso pode ser substituído por uma base de dados

exports.handler = async function (event, context) {
   if (event.httpMethod === 'POST') {
      const { link } = JSON.parse(event.body);
      links.push(link);
      return {
         statusCode: 200,
         body: JSON.stringify({ message: "Link adicionado com sucesso!" }),
      };
   }

   return {
      statusCode: 405,
      body: JSON.stringify({ message: "Método não permitido" }),
   };
};
