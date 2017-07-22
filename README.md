# これは何か？

ionic-nativeのdevelopers guideに従って作成したcordova-plugin-LineLoginのTypeScriptラッパーです。

[https://github.com/atake831/cordova-plugin-LineLogin](https://github.com/atake831/cordova-plugin-LineLogin)


# 使い方

まずはcordova-plugin-LineLoginをダウンロードします。  

````
cordova plugin add cordova-plugin-LineLogin
````

LineLoginを使用したいプロジェクトのnode_modules > @ionic-native配下に置いてください。それだけで使用じたいは可能ですが、npm installすると消えるので、pacakge.jsonに以下の記述を追加するとよいです。  

````
"@ionic-native/repro": "files:node_modules/@ionic-native/line-login",
````

# バグがあったら

すいません。教えてください。
