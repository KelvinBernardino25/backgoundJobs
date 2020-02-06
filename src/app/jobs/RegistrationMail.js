import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  options: {
    delay: 1000,
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "User <user@host.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: `Cadastro de usuário`,
      html: `Olá, ${user.name}, bem-vindo ao sistema de filas`
    });
  }
};
