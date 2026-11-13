export function validarTelefone(telefone) {
  const regex = /^\+351[\s\-]?\d{3}[\s\-]?\d{3}[\s\-]?\d{3}$/;
  return regex.test(telefone);
}

export function validarConfirmacaoPassword(password, confirmarPassword) {
  if (!password || !confirmarPassword) {
    return { valid: false, error: 'Preencha os campos obrigatorios' };
  }
  if (password !== confirmarPassword) {
    return { valid: false, error: 'Passwords nao coincidem' };
  }
  return { valid: true, error: null };
}

export function verificarElegibilidadeReserva(atleta, aula, diaAtualDoMes) {
  if (!atleta.isFeePaidCurrentMonth && diaAtualDoMes > 8) {
    return { allowed: false, reason: 'Mensalidade nao paga' };
  }
  if (aula.currentEnrolled >= aula.maxCapacity) {
    return { allowed: false, reason: 'Sem vagas disponiveis' };
  }
  return { allowed: true, reason: 'Aula Agendada com Sucesso' };
}