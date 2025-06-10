---
sidebar_position: 18
---

# Localization In Ignition - Video Transcripts

This page contains transcripts from the localization-in-ignition video course.

## Overview

These transcripts are automatically generated from the [localization-in-ignition Course](https://inductiveuniversity.com/courses/ignition/localization-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 4:33:55 PM
Source URL: https://inductiveuniversity.com/courses/ignition/localization-in-ignition/8.1
:::

## Video Transcripts

### 1. Introduction to Project Translation Video at Inductive University

:::tip Video Link
Watch the video: [Introduction to Project Translation Video at Inductive University](https://inductiveuniversity.com/videos/introduction-to-project-translation/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    Through the use of localization, Ignition offers us the ability to translate texts on vision or perspective applications, to a language of your choice. A user can easily choose which language their client or session displays using a special language selector that will display the available language defined in the system. Texts contained within components that have their properties correctly mapped with localization, will be translated to reflect the user selected language. To set translations, I first have to define a new language within what we call the translation manager. I am currently in my designer. If I head to the tools menu, I will find the translation manager option. Once my translation manager opens, I will see on the left a list of all my currently available languages. In the center, you will see a table where my translation terms are defined. A translation term is composed of a key string value along with any number of translations.

**[01:04]** [01:04]
                                    This list of terms is global and therefore shared across all your ignition projects. Before I define a translation, I have to add a new language using the plus icon on the upper left-hand corner. I will select Spanish from the language drop-down here and press okay. With my new Spanish language added, I can begin to define translation terms. I will create a new term by pressing the plus icon on the upper right-hand corner of my translation manager. I will make this new terms key value be auto, and click okay. I will now expand my new term like so and I will give it its Spanish translation and save it. I will add a new additional term and make it's key value be temperature. I will expand my new temperature term and give it a Spanish translation as well, and press save. There are other ways to add or view translation terms. In my currently open vision window, I can select say one of my labels.

**[02:06]** [02:06]
                                    If I try and edit its text property from the property editor like this, you will see a little button on the bottom right. If you press it, you will see my auto key and it's translation listed. Say instead of auto, my label said something different. Since this new text is not defined as a translation term, if I try to see its translation you'll notice that it will be blank and I will be given the option to add it as a new term and define its translation later. From my project browser I can also right click on my windows room container and select the translations menu. This will recursively browse all the translatable properties in the components within my room container and list them out in this translatable terms panel. You'll notice in this translatable terms panel that I can have a global or a component translation. Component are specific only to that component and can only be added using the translatable terms panel.

**[03:05]** [03:05]
                                    A global term is available both in the translation manager and the translatable terms panel. Global terms are global in that they can provide translations on all components, in all windows, and on all projects. Keep in mind that component translations will always take precedence over any globally defined translation. From the translatable terms panel, I can filter my terms, I can select or add a new language, or I can add any selected terms to my translation manager to be translated later. I'll do that. I will select all of these terms, and I will click on the add to translation manager button. Now, if I head over to the translation manager from the tools menu, you will see that all of my new terms have been added. I have defined my Spanish language and I have mapped some English words to their Spanish translations. I can now test them to see if they worked. My vision window here is displaying information for eight motors using some of the words I have translated from English to Spanish, like auto and temperature.

**[04:10]** [04:10]
                                    To get these words to translate, I first have to grab the language selector component from my vision component palette. I will go ahead and place my designer in preview mode. And when clicking on the language selector drop-down, you will notice that it automatically knows that I have a Spanish language defined. Selecting Spanish, will cause any and all words in my application to be translated to Spanish as long as they have a translation term associated with them in the translation manager. As you can see, once you spend some time defining which terms you want translated to what language, and assign them their specific translated terms, switching between languages and ignition, it's just a few clicks away. Now in this lesson, we've explored translations envision. In a later lesson, you will learn how translations work using perspective.

</details>

---

### 2. Session Wide Translation Video at Inductive University

:::tip Video Link
Watch the video: [Session Wide Translation Video at Inductive University](https://inductiveuniversity.com/videos/session-wide-translation/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Perspective sessions can use the translations that you set up within your translation manager to translate the text within your session to that of another language. You still need to add and translate your terms in ignitions translation manager. If I go into my tools menu and then select translation manager, you can see that I have a term here, test, with it's Spanish translation. Once I have my term set up, I simply need to tell the session to use another language. Doing so is simple. I need to go into my session properties and find the property called locale. The locale property contains the locale code for the language that should be used. In this case, EN refers to English. If I change the locale code to ES for Spanish and then go back to my view, you can see that my label, which originally said test is now translated into Spanish. If I select the label, I can see that the underlying text is still test. Because the locale is just a session property, it's really easy to give the user the ability to change which language they're looking at. You'll notice I have a dropdown component. This dropdown has two options. Spanish, with a value of ES, and English, with an underlying value of EN. I have then set up a binding on the value of the dropdown. To be bound to the locale property by direction only. This means that whenever the user makes a change to this dropdown, whichever option they choose will change that locale property and display the text on the session using that language.

</details>

---

### 3. Import and Export Translations Video at Inductive University

:::tip Video Link
Watch the video: [Import and Export Translations Video at Inductive University](https://inductiveuniversity.com/videos/import-and-export-translations/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In a previous lesson, we showed how Ignition is able to translate text on vision or perspective applications to any language you define within the system. The ability to export and import terms and translations can be a crucial component to the translation of a large project. In this lesson, we will cover how imports and exports work for translations. I am currently on my designer, and as we can see, there is a lot of text here on this vision window. If I wanted to translate this application to Spanish, I could simply go to my project browser, right click on my window's root container, and head to the translation menu to bring up the translatable terms panel. Here, I can select all the terms available in this window and press this button to add them to my translation manager. I can now head to my tools menu and select the translation manager option to view my newly added terms.

**[01:04]** [01:04]
                                    This means that anywhere in my application that these words of phrases exist, if the local is changed to Spanish, these words would then be translated to Spanish using my translations defined here. Say that these terms are commonly used by my employer and I want to use them in other gateways. What I can do is export them and later import them into whatever Ignition gateway needs these Spanish translations. I will click on the export button on the right-hand side of the translation manager. First we select our base folder, or the folder where we want these translations to be saved. I will give my file a name. In this case, I will export both the English alternate and Spanish translations. I will choose XML as my format. Property and XML are both standard file formats. They're very similar, they just use different coding mechanisms. Once we export these terms, we can open the folder and see that the files have been written.

**[02:05]** [02:05]
                                    Notice the individual file per language. Now, a translator can come in, open the Spanish version of the file and translate some of these terms like I am doing currently. Once we are happy with our translations, we can go back to our designers translation manager, press the import button. I will select my Spanish translations file. I select Spanish as my language. Now, I can select individual translations, but I will just import all. In general, you might not want to import all and overwrite any existing translations. You might just want to import selected translations, which is fine. I will click okay to finish my import and you will now see my new translations showing in the translation manager. Now if I head back to my vision window, I can put my designer in preview mode and use the language selector component to switch my locale to Spanish and see my new translations working.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
