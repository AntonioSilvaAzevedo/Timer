import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <td>Tarefa</td>
            <td>20 Minutos</td>
            <td>Há 2 meses</td>
            <td>
              <Status statusColor="green">Concluído</Status>
            </td>
          </tbody>
          <tbody>
            <td>Tarefa</td>
            <td>20 Minutos</td>
            <td>Há 2 meses</td>
            <td>
              <Status statusColor="green">Concluído</Status>
            </td>
          </tbody>
          <tbody>
            <td>Tarefa</td>
            <td>20 Minutos</td>
            <td>Há 2 meses</td>
            <td>
              <Status statusColor="red">Concluído</Status>
            </td>
          </tbody>
          <tbody>
            <td>Tarefa</td>
            <td>20 Minutos</td>
            <td>Há 2 meses</td>
            <td>
              <Status statusColor="yellow">Concluído</Status>
            </td>
          </tbody>
          <tbody>
            <td>Tarefa</td>
            <td>20 Minutos</td>
            <td>Há 2 meses</td>
            <td>
              <Status statusColor="green">Concluído</Status>
            </td>
          </tbody>
          <tbody>
            <td>Tarefa</td>
            <td>20 Minutos</td>
            <td>Há 2 meses</td>
            <td>
              <Status statusColor="green">Concluído</Status>
            </td>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}