# Functional Requirements & UI/UX Screen Mapping

## 1. Athlete / Client (`RFC0` - `RFC7`)
| Req ID | Capability | Mobile Screen / UI Flow |
|---|---|---|
| `RFC0` | Athlete registration, PIN/token verification, and authentication | `EscolherLogin`, `LoginClientes`, `RegistarClientes`, `AutenticarClientes` |
| `RFC1` | Browse scheduled classes and monthly timetable calendar | `MainClientes`, `VisualizarHorario`, `ConsultarAulaCliente` |
| `RFC2` | Book available class slots (blocked if monthly fee is unpaid after day 8) | `MarcarAulasClientes`, `SucessoMarcarAulasCliente`, `FalhaMarcarAulasClientes` |
| `RFC3` | Cancel active class booking prior to class start time | `CancelarAulasClientes`, `ConfirmarCancelamentoClientes` |
| `RFC4` | Track booking lifecycle (`INSCRITO`, `CANCELADO`, `FEITO`, `FALTA`) & QR Code access | `EstadoInscricao`, `QRCodeCheckIn` |
| `RFC5` | Monthly payment reminder notification (due by the 8th of each month) | `NotificacaoMensalidade`, `Balanco` |
| `RFC6` | Persistent booking & attendance history | `HistoricoInscricoes`, `Treino` |
| `RFC7` | Update personal profile data (name, address, phone, photo, password) | `VisualizarDadosCliente`, `AlterarDadosCliente`, `AlterarPasswordCliente` |

## 2. Gym Manager (`RFG0` - `RFG5`)
| Req ID | Capability | Mobile Screen / UI Flow |
|---|---|---|
| `RFG0` | Manager authentication via pre-registered invite credentials | `LoginGestor`, `HomeScreenGestores` |
| `RFG1` | Create, edit, inspect, and remove gym classes (`modality`, `schedule`, `room`, `instructor`, `maxCapacity`) | `GerirAulas`, `ModificarAulas`, `DetalheAula` |
| `RFG2` | Configure monthly membership fee tiers per athlete profile | `GerirMensalidades` |
| `RFG3` | Register athlete fee payments and unlock class booking privileges | `RegistarPagamentos` |
| `RFG4` | Filter historical and upcoming classes by instructor, athlete, or modality | `FiltrarInfo`, `PesquisaGestor` |
| `RFG5` | Manage personal manager profile and security credentials | `PerfilGestor` |

## 3. System Administrator (`RFA0` - `RFA3`)
| Req ID | Capability | Mobile Screen / UI Flow |
|---|---|---|
| `RFA0` | Direct database-provisioned administrator authentication | `HomeScreenAdmin`, `LoginAdmin` |
| `RFA1` | Multi-tenant gym white-labeling (custom logo, name, address, phone, color palette) | `ConfigurarConta` |
| `RFA2` | Athlete account lifecycle management & time-limited invite token dispatch | `GerirAtletas` |
| `RFA3` | Gym manager provisioning, validation, and removal | `GerirGestores` |