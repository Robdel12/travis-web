import { merge } from '@ember/polyfills';

let configKeys, configKeysMap, languageConfigKeys;

languageConfigKeys = {
  go: 'Go',
  php: 'PHP',
  node_js: 'Node.js',
  perl: 'Perl',
  perl6: 'Perl6',
  python: 'Python',
  scala: 'Scala',
  smalltalk: 'Smalltalk',
  smalltalk_config: 'Config',
  ruby: 'Ruby',
  d: 'D',
  julia: 'Julia',
  csharp: 'C#',
  mono: 'Mono',
  dart: 'Dart',
  dart_task: 'Task',
  elixir: 'Elixir',
  ghc: 'GHC',
  haxe: 'Haxe',
  jdk: 'JDK',
  rvm: 'Ruby',
  otp_release: 'OTP Release',
  rust: 'Rust',
  c: 'C',
  cpp: 'C++',
  clojure: 'Clojure',
  lein: 'Lein',
  compiler: 'Compiler',
  crystal: 'Crystal',
  osx_image: 'Xcode',
  xcode_scheme: 'Xcode scheme',
  r: 'R',
  nix: 'Nix',
  shell: 'Shell',
  bash: 'Shell',
  sh: 'Shell'
};

configKeys = {
  env: 'ENV',
  gemfile: 'Gemfile',
  xcode_sdk: 'Xcode SDK',
  xcode_scheme: 'Xcode Scheme',
  compiler: 'Compiler',
  os: 'OS'
};

configKeysMap = merge(configKeys, languageConfigKeys);

export default configKeysMap;

export { languageConfigKeys, configKeys };
