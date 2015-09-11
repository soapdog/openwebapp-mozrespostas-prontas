# Apache Cordova para FirefoxOS #

## Introdução ##
Apache Cordova é um framework de desenvolvimento mobile para multiplataformas, ou seja, ele permite o desenvolvimento com um único código(HTML, CSS e JS) para quase todos os sistemas operacionais (SO) mobile do mercado, evitando assim o retrabalho de desenvolver códigos nativos de cada SO, barateando o custo do desenvolvimento.
Se você chegou até aqui deve saber que o FirefoxOS é baseado em JS também, mas então porque desenvolver em Cordova e não em FirefoxOS nativo? Outras plataformas estão a mais tempo no mercado e com uma base grande de usuários, porque não utilizar isso como um incentivador para dar suporte ao FirefoxOS? Com uma linha de comando você pode adicionar o FirefoxOS no seu projeto sem nenhum custo adicional.

# Requisitos ##

Os requisitos para desenvolver em Cordova para FirefoxOS são:

- Ter o browser Firefox  - http://getfirefox.com/
- Instalar o simulador via WebIDE da versão desejada do FirefoxOS - https://developer.mozilla.org/pt-BR/docs/Tools/WebIDE/Setting_up_runtimes#Adding_a_Simulator
- Instalar o Node.js - https://nodejs.org/en/download/

## Instalando o Cordova ##
Para baixar o Cordova em seu computador basta digitar em seu Terminal/cmd:

    $ npm install cordova -g

O parâmetro “-g” significa que seu Cordova será instalado na pasta global do Nodejs, podendo então ser acessado em qualquer pasta.

## Criando e executando um Projeto Cordova ##

Vamos criar um projeto:

    $ cordova create <nome da pasta> <packge do app> <nome do app>
Ex:
    $ cordova create exemplo com.firefox.firefoxos ExemploFirefox

Vamos então adicionar a plataforma FirefoxOS em nosso projeto, antes disso é preciso acessar a pasta que acabamos de criar, em nosso exemplo tem o nome de “exemplo”:

    $ cd exemplo
    $ cordova platform add firefoxos

Feito isso seu hello word em Cordova está a um passo de ser executado, basta agora na WebIDE adicionar um aplicativo empacotado (https://developer.mozilla.org/en-US/docs/Tools/WebIDE/Creating_and_editing_apps#Open_a_packaged_app) da seguinte pasta:

    $ <nome da pasta do app>/platform/firefoxos/www

Pronto!! Só dar play em seu emulador que seu app de Hello Word em Cordova funcionará lindamente.

## Plugins ##

Para acessar as features e informações dos aparelhos é preciso que instale em seu projeto o plugin referente a qual feature deseja utilizar, o projeto Cordova mantém alguns plugins, que são:

-  Lista de Plugins: http://cordova.apache.org/docs/en/5.0.0/cordova_plugins_pluginapis.md.html#Plugin%20APIs

Em nosso exemplo vamos utilizar o plugin “Device”, que nos retorna algumas informações como, qual plataforma executada, qual o modelo do aparalho, qual a versão do Cordova, qual o UUID e outras infos:

    $ cordova plugin add cordova-plugin-device

Lembre-se a documentação é sua melhor amiga, para saber como utilizar esse plugin, acesse sua documentação - https://www.npmjs.com/package/cordova-plugin-device

## Testar Alterações ##

Toda alteração em seu aplicativo é preciso dar o build, para que o Cordova exporte para todas as plataformas as alterações, para fazer isso apenas no FirefoxOS digite:

    $ cordova build firefoxos

Caso não coloque firefoxos no final ele vai dar o build em todas as plataformas inseridas, o que pode demorar um tanto, aconselho para um desenvolvimento mais rápido fazer o build separadamente de cada plataforma.
Agora no emulador basta dar um refresh no seu app que as alterações serão instaladas no emulador.

## Referências ##
Referêcia do Apache Cordova na MDN: https://developer.mozilla.org/en-US/docs/Tools/WebIDE/Working_with_Cordova_apps_in_WebIDE
