interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

function exibirPerfil(u: UsuarioSemSenha): void {
  console.log(`ID: ${u.id} | Nome: ${u.nome} | Email: ${u.email}`);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
  console.log(`Atualizando usuário ${id}:`, dados);
}

exibirPerfil({ id: 1, nome: "Gustavo", email: "gustavo@email.com" });
atualizarUsuario(1, { nome: "Gustavo B.", email: "novo@email.com" });