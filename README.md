# 🅰️ Angular Entorns Client — Curs 0612

Repositori de curs per al mòdul **0612 Desenvolupament web en entorn client** (DAW2).

---

## 📋 Com usar aquest repositori

### 1. Fes fork d'aquest repositori

Ves a la cantonada superior dreta i clica **Fork**. Treballa sempre al **teu fork** — mai en aquest repositori.

### 2. Clona el teu fork en local

```bash
git clone https://github.com/EL-TEU-USUARI/AngularEntornsCurs.git
cd AngularEntornsCurs
npm install
ng serve
```

### 3. Consulta les branques de livecoding

Cada sessió té una branca amb el codi fet en directe a classe:

| Branca | Contingut |
|--------|-----------|
| `lc/01-entorn-cli` | ng new, estructura de fitxers |
| `lc/02-typescript-base` | Tipus, interfícies, classes |
| `lc/03-components` | Crear i usar components |
| `lc/04-interpolacio-dades` | Mostrar dades del TS al HTML |
| `lc/05-control-flow-for` | @for i track | 
| `lc/06-control-flow-if` | @if i @else |
| `lc/07-property-binding` | [ ] Property Binding |
| `lc/08-event-binding` | ( ) Event Binding |
| `lc/09-inputs-outputs` | input<>() i output<>() |
| `lc/10-routes` | Routing bàsic |
| `lc/11-routes-dinamiques` | Paràmetres de ruta + ngClass |
| `lc/12-reactive-forms` | FormGroup i FormControl |
| `lc/13-validadors` | Validators + missatges error |
| `lc/14-services` | Services + inject() |
| `lc/15-http-client` | HttpClient + observables |
| `lc/16-rxjs-behaviorsubject` | BehaviorSubject + estat compartit |
| `lc/17-jwt-guards` | JWT + HttpInterceptor + AuthGuard |

> Si t'encalles en un repte, mira la branca de la sessió corresponent.

### 4. Entrega cada repte com a Pull Request

1. Fes els canvis al teu fork (`main` o una branca pròpia)
2. Fes commit: `git commit -m "repte-s03: TarjetaComponent creat"`
3. Obre un **Pull Request** al teu fork (base: `main`)
4. Posa a la descripció del PR: **què has fet** i **on has tingut dubtes**

---

## 🗂️ Estructura del projecte

```
src/
  app/
    components/       ← els teus components
    services/         ← els teus services (a partir d'AEA2)
    interfaces/       ← interfícies TypeScript
    pages/            ← pàgines/vistes (a partir de routes)
  assets/
```

---

## 📅 Planificació resumida

| AEA | Hores | Continguts principals | Instrument |
|-----|-------|-----------------------|------------|
| AEA1 | 30h | Angular CLI, TypeScript base, Components, @for/@if, Bindings, Events, Input/Output | Pt1 + Pv1 |
| AEA2 | 25h | Routes, Reactive Forms, Services, HttpClient, RxJS, JWT + Guards | Pt2 + Pv2 |
| AEA3 | 44h | Repte (nivells 1–5): app completa amb Laravel + Angular + Docker | Pt3/Rt + Pv3 |

---

## 📚 Recursos de referència

- [Repositori d'exemples Angular](https://github.com/fmartinez-dev-learn/AngularSamples) — exemples per tema, per consultar
- [Documentació oficial Angular](https://angular.dev)

---

## ⚙️ Versions

- **Node.js**: 20.x
- **Angular CLI**: última versió estable (`npm install -g @angular/cli`)

---

## ✅ GitHub Actions — comprovació automàtica

Cada vegada que fas `push`, s'executa automàticament `ng build`. 
Veuràs ✅ o ❌ a la pestanya **Actions** del teu fork. 
Si surt ❌, mira el log d'errors.
