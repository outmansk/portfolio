# Portfolio — Outman Skikin

Site statique (HTML, CSS, JavaScript sans dépendance) : page d'accueil bilingue FR/EN,
carrousel de projets, slider de compétences et version mobile.

## Structure

```
index.html              page unique (contenu français + balises SEO + JSON-LD Person)
css/style.css           styles
js/main.js              bouton FR/EN, carrousel, slider (textes FR et EN)
assets/img/             photo, image Open Graph (1200×630), favicon
CV_Outman_Skikin.pdf    CV téléchargeable
robots.txt, sitemap.xml référencement
```

## Voir le site en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
npx serve .
```

## Modifier un texte

Le texte français est écrit dans `index.html` (pour Google) **et** dans `js/main.js`
(objet `T.fr`, utilisé quand on revient de l'anglais). Modifier les deux.
Le texte anglais n'est que dans `js/main.js` (objet `T.en`).

## Mettre le CV à jour

Remplacer `CV_Outman_Skikin.pdf` en gardant le même nom de fichier.
