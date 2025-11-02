import { useState } from "react";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [
  {
    title:
      "Learn World Mythology Free | Greek, Norse & Egyptian Gods – Mythology School",
  },
  {
    name: "description",
    content:
      "Discover the gods, heroes, and stories of world mythology. Study Greek, Norse, Egyptian and more with free lessons, quizzes, and research-based articles at Mythology School.",
  },
  {
    name: "keywords",
    content:
      "learn mythology online, greek mythology, norse mythology, egyptian gods, mythology quizzes, world mythology course, free mythology lessons",
  },
  { name: "robots", content: "index,follow" },
  { name: "author", content: "MythologySchool.com" },
  { name: "theme-color", content: "#f8f6ef" },

  // --- Open Graph (for social / SEO preview) ---
  { property: "og:type", content: "website" },
  {
    property: "og:title",
    content:
      "Mythology School – Learn About Greek, Norse, and Egyptian Gods Free",
  },
  {
    property: "og:description",
    content:
      "Explore ancient myths and legends with free, well-researched mythology lessons and quizzes. Perfect for students, writers, and curious minds.",
  },
  {
    property: "og:image",
    content: "https://mythologyschool.com/og-image.jpg",
  },
  { property: "og:url", content: "https://mythologyschool.com" },
  { property: "og:site_name", content: "Mythology School" },

  // --- Twitter ---
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content:
      "Learn World Mythology Free | Greek, Norse & Egyptian Gods – Mythology School",
  },
  {
    name: "twitter:description",
    content:
      "Study myths, gods, and heroes from every culture. Free mythology courses and quizzes online at MythologySchool.com.",
  },
  {
    name: "twitter:image",
    content: "https://mythologyschool.com/og-image.jpg",
  },
  { name: "twitter:site", content: "@MythologySchool" },
  { rel: "canonical", href: "https://mythologyschool.com" },
];

const questions = [
  {
    q: "Who is considered the king of the Greek gods?",
    options: ["Apollo", "Zeus", "Poseidon", "Hermes"],
    correct: "Zeus",
    explanation:
      "Zeus ruled as king of Mount Olympus and god of the sky and thunder.",
  },
  {
    q: "In Norse mythology, what is the name of the world tree that connects all realms?",
    options: ["Asgard", "Midgard", "Yggdrasil", "Bifröst"],
    correct: "Yggdrasil",
    explanation:
      "Yggdrasil is the immense ash tree that connects the nine realms.",
  },
  {
    q: "Which Egyptian god is associated with mummification and the afterlife?",
    options: ["Ra", "Anubis", "Osiris", "Horus"],
    correct: "Anubis",
    explanation:
      "Anubis, depicted as a jackal, presided over embalming and the dead.",
  },
  {
    q: "In Hindu mythology, who is the preserver among the Trimurti?",
    options: ["Brahma", "Shiva", "Vishnu", "Indra"],
    correct: "Vishnu",
    explanation:
      "Vishnu preserves and sustains the universe, often incarnating as Rama or Krishna.",
  },
  {
    q: "Which Celtic goddess is known for sovereignty and war?",
    options: ["Morrígan", "Brigid", "Danu", "Epona"],
    correct: "Morrígan",
    explanation:
      "The Morrígan is associated with fate, battle, and kingship in Irish mythology.",
  },
  {
    q: "Who was the Greek goddess of wisdom?",
    options: ["Athena", "Aphrodite", "Artemis", "Hera"],
    correct: "Athena",
    explanation: "Athena represented wisdom, strategy, and crafts.",
  },
  {
    q: "Which titan held up the sky?",
    options: ["Atlas", "Prometheus", "Cronus", "Oceanus"],
    correct: "Atlas",
    explanation:
      "Atlas was condemned by Zeus to bear the heavens on his shoulders.",
  },
  {
    q: "What animal is sacred to the goddess Bastet?",
    options: ["Cat", "Crocodile", "Falcon", "Dog"],
    correct: "Cat",
    explanation:
      "Cats were revered as sacred to Bastet, symbolizing protection and grace.",
  },
  {
    q: "Thor’s hammer is called …",
    options: ["Gungnir", "Mjölnir", "Gram", "Laevateinn"],
    correct: "Mjölnir",
    explanation: "Mjölnir was Thor’s thunder hammer and emblem of power.",
  },
  {
    q: "Who is the Hindu god of destruction and transformation?",
    options: ["Vishnu", "Brahma", "Shiva", "Indra"],
    correct: "Shiva",
    explanation: "Shiva destroys illusion to enable renewal of the universe.",
  },
  {
    q: "The Morrígan belongs to which mythology?",
    options: ["Greek", "Norse", "Celtic", "Roman"],
    correct: "Celtic",
    explanation: "The Morrígan is an Irish goddess of fate and battle.",
  },
  {
    q: "Ra travelled across the sky each day in a …",
    options: ["Chariot", "Boat", "Eagle", "Serpent"],
    correct: "Boat",
    explanation: "Ra sailed his solar barque across the heavens daily.",
  },
  {
    q: "Who was the trickster god in Norse myth?",
    options: ["Loki", "Freyr", "Baldr", "Heimdall"],
    correct: "Loki",
    explanation: "Loki caused mischief among gods and mortals alike.",
  },
  {
    q: "What is the Japanese sun goddess’s name?",
    options: ["Amaterasu", "Susanoo", "Tsukuyomi", "Inari"],
    correct: "Amaterasu",
    explanation:
      "Amaterasu Ōmikami is the Shinto sun goddess and imperial ancestor.",
  },
  {
    q: "Anubis’s head resembles which animal?",
    options: ["Jackal", "Falcon", "Lion", "Crocodile"],
    correct: "Jackal",
    explanation: "Anubis is depicted as a black jackal-headed deity.",
  },
  {
    q: "In Greek myth, who flew too close to the sun?",
    options: ["Perseus", "Icarus", "Daedalus", "Theseus"],
    correct: "Icarus",
    explanation: "Icarus ignored warnings and melted his wax wings.",
  },
  {
    q: "Which river must souls cross to reach Hades?",
    options: ["Lethe", "Acheron", "Styx", "Phlegethon"],
    correct: "Styx",
    explanation:
      "The River Styx separated the world of the living from the dead.",
  },
  {
    q: "What tree connects the nine realms in Norse myth?",
    options: ["Yggdrasil", "Mímameiðr", "Barnstokkr", "Irminsul"],
    correct: "Yggdrasil",
    explanation: "Yggdrasil is the cosmic ash tree uniting all worlds.",
  },
  {
    q: "Who is the elephant-headed Hindu god?",
    options: ["Hanuman", "Ganesha", "Kartikeya", "Kubera"],
    correct: "Ganesha",
    explanation: "Ganesha removes obstacles and grants wisdom.",
  },
  {
    q: "The Greek god of the sea is …",
    options: ["Zeus", "Poseidon", "Hades", "Hermes"],
    correct: "Poseidon",
    explanation: "Poseidon ruled oceans and earthquakes.",
  },
  {
    q: "Isis resurrected which slain god?",
    options: ["Horus", "Osiris", "Set", "Thoth"],
    correct: "Osiris",
    explanation: "Isis reassembled Osiris after he was murdered by Set.",
  },
  {
    q: "Valhalla is ruled by …",
    options: ["Odin", "Thor", "Freyja", "Tyr"],
    correct: "Odin",
    explanation: "Odin welcomes brave warriors to feast until Ragnarök.",
  },
  {
    q: "Who turned Medusa into a Gorgon?",
    options: ["Athena", "Hera", "Aphrodite", "Demeter"],
    correct: "Athena",
    explanation: "Athena punished Medusa by transforming her into a Gorgon.",
  },
  {
    q: "Which Aztec god demanded human hearts?",
    options: ["Quetzalcoatl", "Huitzilopochtli", "Tezcatlipoca", "Tlaloc"],
    correct: "Huitzilopochtli",
    explanation: "He was the Aztec sun and war god requiring sacrifices.",
  },
  {
    q: "The Celtic festival Samhain inspired which modern holiday?",
    options: ["Easter", "Halloween", "May Day", "Christmas"],
    correct: "Halloween",
    explanation: "Samhain marked the veil thinning between worlds on Oct 31.",
  },
  {
    q: "Who guards the entrance to the Greek underworld?",
    options: ["Cerberus", "Hydra", "Chimera", "Sphinx"],
    correct: "Cerberus",
    explanation: "Cerberus is the three-headed hound of Hades.",
  },
  {
    q: "Which Egyptian goddess has wings and embodies truth?",
    options: ["Nephthys", "Ma’at", "Sekhmet", "Hathor"],
    correct: "Ma’at",
    explanation: "Ma’at personifies cosmic order and truth.",
  },
  {
    q: "In Japanese myth, Susanoo is god of …",
    options: ["Wind", "Storms and Sea", "Mountains", "Harvest"],
    correct: "Storms and Sea",
    explanation: "Susanoo governs storms and oceans, Amaterasu’s brother.",
  },
  {
    q: "The Norse end-times battle is called …",
    options: ["Ragnarök", "Fimbulwinter", "Helheim", "Sköll"],
    correct: "Ragnarök",
    explanation: "Ragnarök is the destined twilight of the gods.",
  },
  {
    q: "Hermes is messenger of which pantheon?",
    options: ["Roman", "Greek", "Egyptian", "Norse"],
    correct: "Greek",
    explanation: "Hermes guided souls and served Zeus as messenger.",
  },
  {
    q: "Which Roman goddess mirrors the Greek Aphrodite?",
    options: ["Minerva", "Diana", "Venus", "Juno"],
    correct: "Venus",
    explanation: "Venus is Aphrodite’s Roman equivalent of love.",
  },
  {
    q: "In Hindu cosmology, the sacred syllable ‘Om’ represents …",
    options: ["Creation", "Destruction", "Silence", "Meditation"],
    correct: "Creation",
    explanation: "‘Om’ embodies the vibration of universal creation.",
  },
  {
    q: "Who forged Zeus’s thunderbolts?",
    options: ["Apollo", "Hephaestus", "Ares", "Hermes"],
    correct: "Hephaestus",
    explanation: "Hephaestus crafted divine weapons in his forge.",
  },
  {
    q: "Which goddess emerged from sea foam?",
    options: ["Aphrodite", "Artemis", "Persephone", "Hera"],
    correct: "Aphrodite",
    explanation:
      "Born from the foam after Uranus’s fall, Aphrodite embodies love.",
  },
  {
    q: "Horus is depicted with the head of a …",
    options: ["Falcon", "Cat", "Crocodile", "Ibis"],
    correct: "Falcon",
    explanation: "Horus, the sky god, has a falcon head symbolizing kingship.",
  },
  {
    q: "Who was tricked into eating pomegranate seeds?",
    options: ["Persephone", "Eurydice", "Ariadne", "Pandora"],
    correct: "Persephone",
    explanation:
      "Persephone’s act bound her to spend part of the year in Hades.",
  },
  {
    q: "The Chinese Monkey King is known as …",
    options: ["Sun Wukong", "Nezha", "Yu the Great", "Chang’e"],
    correct: "Sun Wukong",
    explanation:
      "Sun Wukong is the rebellious immortal from *Journey to the West*.",
  },
  {
    q: "Which hero slew the Minotaur?",
    options: ["Theseus", "Heracles", "Jason", "Perseus"],
    correct: "Theseus",
    explanation: "Theseus defeated the Minotaur in the Labyrinth.",
  },
  {
    q: "In Norse lore, who slays Fenrir at Ragnarök?",
    options: ["Thor", "Tyr", "Vidar", "Freyr"],
    correct: "Vidar",
    explanation: "Vidar avenges Odin by killing the wolf Fenrir.",
  },
  {
    q: "The Hindu goddess of learning is …",
    options: ["Lakshmi", "Saraswati", "Parvati", "Durga"],
    correct: "Saraswati",
    explanation: "Saraswati governs wisdom, music, and art.",
  },
  {
    q: "Which Celtic hero gained wisdom by eating the Salmon of Knowledge?",
    options: ["Cú Chulainn", "Fionn mac Cumhaill", "Oisín", "Lugh"],
    correct: "Fionn mac Cumhaill",
    explanation: "He burned his thumb tasting the salmon, gaining insight.",
  },
  {
    q: "The Greek underworld river of forgetfulness is …",
    options: ["Lethe", "Styx", "Cocytus", "Acheron"],
    correct: "Lethe",
    explanation: "Lethe causes souls to forget their mortal lives.",
  },
  {
    q: "Who gave fire to humanity?",
    options: ["Prometheus", "Hermes", "Ares", "Cronus"],
    correct: "Prometheus",
    explanation: "Prometheus defied Zeus to gift fire to mortals.",
  },
  {
    q: "Quetzalcoatl is the … god in Aztec myth.",
    options: ["Rain", "Wind and Knowledge", "Death", "War"],
    correct: "Wind and Knowledge",
    explanation:
      "Quetzalcoatl, the feathered serpent, symbolized wisdom and wind.",
  },
  {
    q: "Which Norse goddess weeps golden tears for her husband Odr?",
    options: ["Sif", "Freyja", "Idunn", "Hel"],
    correct: "Freyja",
    explanation: "Freyja, goddess of love and beauty, sheds golden tears.",
  },
  {
    q: "The Greek hero who completed twelve labors was …",
    options: ["Theseus", "Perseus", "Heracles", "Jason"],
    correct: "Heracles",
    explanation: "Heracles performed twelve feats for redemption.",
  },
  {
    q: "Osiris is god of …",
    options: ["The Sun", "The Underworld", "War", "Magic"],
    correct: "The Underworld",
    explanation: "Osiris ruled the afterlife and rebirth.",
  },
  {
    q: "Which Japanese storm god slew the serpent Yamata no Orochi?",
    options: ["Amaterasu", "Tsukuyomi", "Susanoo", "Raijin"],
    correct: "Susanoo",
    explanation:
      "Susanoo rescued Kushinada-hime by killing the eight-headed serpent.",
  },
  {
    q: "Rama’s wife in the *Ramayana* is …",
    options: ["Sita", "Draupadi", "Radha", "Parvati"],
    correct: "Sita",
    explanation: "Sita is the virtuous queen abducted by Ravana.",
  },
  {
    q: "In Celtic myth, what is Tir na nÓg?",
    options: ["A monster", "An afterlife realm", "A weapon", "A festival"],
    correct: "An afterlife realm",
    explanation: "Tir na nÓg is the land of eternal youth.",
  },
  {
    q: "Which Greek muse presides over epic poetry?",
    options: ["Clio", "Calliope", "Erato", "Urania"],
    correct: "Calliope",
    explanation: "Calliope is the muse of epic verse and eloquence.",
  },
  {
    q: "What is the Roman name for Zeus?",
    options: ["Jupiter", "Mars", "Neptune", "Pluto"],
    correct: "Jupiter",
    explanation: "Jupiter is the Roman counterpart to Zeus.",
  },
  {
    q: "Which Egyptian god has the head of an ibis?",
    options: ["Thoth", "Anubis", "Sobek", "Ra"],
    correct: "Thoth",
    explanation: "Thoth represents writing, wisdom, and time.",
  },
  {
    q: "Who guards the golden apples of the Hesperides?",
    options: ["Cyclopes", "Harpies", "Hesperides nymphs & Ladon", "Sirens"],
    correct: "Hesperides nymphs & Ladon",
    explanation: "The nymphs and the dragon Ladon watched Hera’s orchard.",
  },
  {
    q: "What bird is sacred to Athena?",
    options: ["Owl", "Raven", "Eagle", "Swan"],
    correct: "Owl",
    explanation: "The owl symbolizes wisdom and night vigilance.",
  },
  {
    q: "The Hindu festival celebrating Rama’s return is …",
    options: ["Holi", "Diwali", "Navaratri", "Raksha Bandhan"],
    correct: "Diwali",
    explanation: "Diwali honors Rama’s victory and the triumph of light.",
  },
  {
    q: "Who killed Achilles?",
    options: ["Hector", "Paris", "Apollo", "Odysseus"],
    correct: "Paris",
    explanation: "Paris shot Achilles’ heel guided by Apollo.",
  },
  {
    q: "The Norse realm of the dead is …",
    options: ["Asgard", "Midgard", "Helheim", "Muspelheim"],
    correct: "Helheim",
    explanation: "Helheim is ruled by the goddess Hel.",
  },
  {
    q: "Which Celtic god wielded the thunder-weapon known as the Club?",
    options: ["Dagda", "Lugh", "Nuada", "Balor"],
    correct: "Dagda",
    explanation: "The Dagda’s club could kill or revive at will.",
  },
  {
    q: "Which hero stole the Golden Fleece?",
    options: ["Perseus", "Odysseus", "Jason", "Heracles"],
    correct: "Jason",
    explanation: "Jason led the Argonauts to retrieve the Golden Fleece.",
  },
  {
    q: "In Egyptian belief, the heart was weighed against …",
    options: ["A feather", "A stone", "Gold", "A scale"],
    correct: "A feather",
    explanation: "It was weighed against Ma’at’s feather of truth.",
  },
  {
    q: "What creature did Perseus slay?",
    options: ["Hydra", "Medusa", "Cerberus", "Minotaur"],
    correct: "Medusa",
    explanation: "Perseus beheaded the Gorgon Medusa.",
  },
  {
    q: "Which Norse goddess tends the golden apples of youth?",
    options: ["Sif", "Idunn", "Skadi", "Hel"],
    correct: "Idunn",
    explanation: "Idunn’s apples preserve the gods’ immortality.",
  },
  {
    q: "Who is known as the Greek god of wine?",
    options: ["Hermes", "Apollo", "Dionysus", "Ares"],
    correct: "Dionysus",
    explanation: "Dionysus governs wine, ecstasy, and theatre.",
  },
  {
    q: "Which Mayan feathered serpent parallels Quetzalcoatl?",
    options: ["Itzamna", "Kukulkan", "Chaac", "Hunab Ku"],
    correct: "Kukulkan",
    explanation: "Kukulkan is the Yucatán form of Quetzalcoatl.",
  },
  {
    q: "The Hindu epic *Mahabharata* centers on which war?",
    options: ["Kurukshetra", "Lanka", "Panipat", "Ayodhya"],
    correct: "Kurukshetra",
    explanation:
      "The Kurukshetra War between Pandavas and Kauravas forms its core.",
  },
  {
    q: "Which goddess opened a forbidden jar releasing woes?",
    options: ["Pandora", "Hera", "Gaia", "Persephone"],
    correct: "Pandora",
    explanation: "Pandora released hardships but hope remained inside.",
  },
  {
    q: "Fenrir is what type of creature?",
    options: ["Dragon", "Wolf", "Giant", "Serpent"],
    correct: "Wolf",
    explanation: "Fenrir is the monstrous wolf child of Loki.",
  },
  {
    q: "Who guided Aeneas through the Underworld?",
    options: ["Sibyl", "Virgil", "Hecate", "Hermes"],
    correct: "Sibyl",
    explanation: "The Cumaean Sibyl led Aeneas below in Roman myth.",
  },
  {
    q: "Which Egyptian goddess wore a solar disk between cow horns?",
    options: ["Hathor", "Sekhmet", "Isis", "Bastet"],
    correct: "Hathor",
    explanation: "Hathor symbolized motherhood, joy, and the sun.",
  },
  {
    q: "The Norse rainbow bridge is called …",
    options: ["Gjallarbru", "Bifröst", "Sköll", "Asbru"],
    correct: "Bifröst",
    explanation: "Bifröst connects Midgard and Asgard.",
  },
  {
    q: "In Greek myth, who was condemned to roll a stone uphill forever?",
    options: ["Sisyphus", "Tantalus", "Ixion", "Orpheus"],
    correct: "Sisyphus",
    explanation: "Sisyphus’s endless toil symbolizes futility.",
  },
  {
    q: "The Hindu goddess Durga rides a …",
    options: ["Lion", "Elephant", "Peacock", "Horse"],
    correct: "Lion",
    explanation: "Durga rides a lion or tiger into battle.",
  },
  {
    q: "Which Roman god is equivalent to Hermes?",
    options: ["Mercury", "Mars", "Neptune", "Pluto"],
    correct: "Mercury",
    explanation: "Mercury served as messenger and guide of souls.",
  },
  {
    q: "What weapon does Shiva carry?",
    options: ["Trident (Trishula)", "Sword", "Axe", "Bow"],
    correct: "Trident (Trishula)",
    explanation:
      "The Trishula symbolizes Shiva’s power over creation, preservation, destruction.",
  },
  {
    q: "Which Greek hero journeyed to the Underworld to rescue Eurydice?",
    options: ["Theseus", "Orpheus", "Perseus", "Heracles"],
    correct: "Orpheus",
    explanation: "Orpheus’s music softened Hades, but he looked back too soon.",
  },
  {
    q: "Helios drove what across the sky?",
    options: ["A chariot of the sun", "A ship", "A dragon", "A horse"],
    correct: "A chariot of the sun",
    explanation: "Helios’s fiery chariot brought daylight to Earth.",
  },
  {
    q: "The Aztec goddess of fertility and death is …",
    options: ["Coatlicue", "Chalchiuhtlicue", "Tlazolteotl", "Coyolxauhqui"],
    correct: "Coatlicue",
    explanation:
      "Coatlicue, ‘Serpent Skirt’, birthed gods including Huitzilopochtli.",
  },
  {
    q: "Who tricked Set and restored Osiris’s son’s throne?",
    options: ["Isis", "Nephthys", "Bastet", "Hathor"],
    correct: "Isis",
    explanation: "Isis’s magic and cunning secured Horus’s rule.",
  },
  {
    q: "Which Hindu demon king abducted Sita?",
    options: ["Ravana", "Kumbhakarna", "Mahishasura", "Hiranyakashipu"],
    correct: "Ravana",
    explanation: "Ravana, ten-headed ruler of Lanka, kidnapped Sita.",
  },
  {
    q: "In Celtic myth, what weapon did Lugh wield?",
    options: ["Spear", "Sword", "Club", "Bow"],
    correct: "Spear",
    explanation: "Lugh’s spear was unstoppable in battle.",
  },
  {
    q: "The Greek personification of victory is …",
    options: ["Nike", "Iris", "Nemesis", "Eos"],
    correct: "Nike",
    explanation: "Nike symbolizes triumph and was depicted with wings.",
  },
  {
    q: "Which Egyptian god is a crocodile deity of strength?",
    options: ["Sobek", "Khnum", "Anubis", "Ptah"],
    correct: "Sobek",
    explanation:
      "Sobek was the crocodile god symbolizing power, fertility, and the Nile.",
  },
  {
    q: "Who is the Greek goddess of the hunt?",
    options: ["Artemis", "Athena", "Hera", "Demeter"],
    correct: "Artemis",
    explanation: "Artemis protected the wilderness, animals, and young women.",
  },
  {
    q: "Which Norse being guards Bifröst?",
    options: ["Heimdall", "Baldur", "Tyr", "Odin"],
    correct: "Heimdall",
    explanation:
      "Heimdall watches the rainbow bridge and blows the Gjallarhorn at Ragnarök.",
  },
  {
    q: "In Hindu belief, what is the cycle of birth and rebirth called?",
    options: ["Nirvana", "Samsara", "Karma", "Moksha"],
    correct: "Samsara",
    explanation:
      "Samsara is the continuous cycle of reincarnation and worldly existence.",
  },
  {
    q: "What creature did Apollo slay near Delphi?",
    options: ["Hydra", "Python", "Cerberus", "Chimera"],
    correct: "Python",
    explanation:
      "Apollo killed the serpent Python and founded the Oracle of Delphi.",
  },
  {
    q: "The Aztec rain god is …",
    options: ["Tlaloc", "Tezcatlipoca", "Xipe Totec", "Quetzalcoatl"],
    correct: "Tlaloc",
    explanation: "Tlaloc governed rain, fertility, and storms.",
  },
  {
    q: "Who is the Norse goddess of the underworld?",
    options: ["Hel", "Skadi", "Freyja", "Frigg"],
    correct: "Hel",
    explanation: "Hel, daughter of Loki, ruled the realm of the dead.",
  },
  {
    q: "What mountain is home to the Greek gods?",
    options: ["Parnassus", "Olympus", "Ida", "Helicon"],
    correct: "Olympus",
    explanation:
      "Mount Olympus was believed to be the dwelling of the Olympian gods.",
  },
  {
    q: "Which Hindu epic tells the story of the Pandavas?",
    options: ["Ramayana", "Mahabharata", "Bhagavata Purana", "Rigveda"],
    correct: "Mahabharata",
    explanation:
      "The Mahabharata recounts the Pandavas’ struggle in the Kurukshetra war.",
  },
  {
    q: "Who is the Greek god of war?",
    options: ["Ares", "Hermes", "Apollo", "Poseidon"],
    correct: "Ares",
    explanation: "Ares personified brutal war and conflict.",
  },
  {
    q: "The Japanese god of thunder is …",
    options: ["Raijin", "Hachiman", "Inari", "Ryujin"],
    correct: "Raijin",
    explanation: "Raijin creates thunder by beating his drums.",
  },
  {
    q: "What mythological bird rises from its ashes?",
    options: ["Griffin", "Phoenix", "Roc", "Garuda"],
    correct: "Phoenix",
    explanation: "The phoenix symbolizes rebirth through fire and renewal.",
  },
  {
    q: "In Egyptian myth, Set represents …",
    options: ["Chaos and Desert", "Love and Music", "Wisdom", "Harvest"],
    correct: "Chaos and Desert",
    explanation: "Set personifies disorder, storms, and the arid desert.",
  },
  {
    q: "Who was the father of Achilles?",
    options: ["Peleus", "Priam", "Menelaus", "Agamemnon"],
    correct: "Peleus",
    explanation: "Peleus was a mortal king who wed the sea nymph Thetis.",
  },
  {
    q: "Which Norse hero slew the dragon Fafnir?",
    options: ["Sigurd", "Beowulf", "Bjorn", "Gunnar"],
    correct: "Sigurd",
    explanation:
      "Sigurd gained wisdom after slaying Fafnir and tasting its heart.",
  },
  {
    q: "What is the Hindu concept of liberation from rebirth?",
    options: ["Karma", "Moksha", "Dharma", "Artha"],
    correct: "Moksha",
    explanation: "Moksha means release from Samsara and union with the divine.",
  },
  {
    q: "Which Roman goddess was protector of marriage?",
    options: ["Venus", "Juno", "Minerva", "Diana"],
    correct: "Juno",
    explanation: "Juno was queen of the gods and guardian of matrimony.",
  },
  {
    q: "Who tamed Pegasus in Greek myth?",
    options: ["Bellerophon", "Perseus", "Heracles", "Jason"],
    correct: "Bellerophon",
    explanation: "Bellerophon captured Pegasus with Athena’s help.",
  },
  {
    q: "Which goddess was born fully armed from Zeus’s head?",
    options: ["Athena", "Hera", "Artemis", "Demeter"],
    correct: "Athena",
    explanation: "Athena emerged fully grown and armored from Zeus’s forehead.",
  },
  {
    q: "In Celtic lore, who was the father of Lugh?",
    options: ["Cian", "Balor", "Dagda", "Nuada"],
    correct: "Cian",
    explanation:
      "Cian fathered Lugh, the bright-skilled hero of the Tuatha Dé Danann.",
  },
  {
    q: "The Egyptian Book of the Dead was meant to …",
    options: [
      "Predict weather",
      "Guide souls",
      "Bless kings",
      "Teach hieroglyphs",
    ],
    correct: "Guide souls",
    explanation:
      "It contained spells to guide the deceased through the afterlife.",
  },
  {
    q: "Which hero defeated the Hydra?",
    options: ["Heracles", "Theseus", "Perseus", "Odysseus"],
    correct: "Heracles",
    explanation: "Heracles slew the Hydra as his second labor.",
  },
  {
    q: "Who shot the arrow that killed Siegfried?",
    options: ["Hagen", "Odin", "Fafnir", "Loki"],
    correct: "Hagen",
    explanation: "Hagen betrayed Siegfried in the Nibelungenlied saga.",
  },
  {
    q: "The Greek goddess of harvest and agriculture is …",
    options: ["Demeter", "Persephone", "Hera", "Gaia"],
    correct: "Demeter",
    explanation: "Demeter governed crops and fertility of the earth.",
  },
  {
    q: "In Japanese myth, fox spirits are called …",
    options: ["Kitsune", "Tengu", "Oni", "Kami"],
    correct: "Kitsune",
    explanation:
      "Kitsune are shapeshifting fox spirits of intelligence and trickery.",
  },
  {
    q: "Which Hindu god rides a peacock?",
    options: ["Kartikeya", "Ganesha", "Indra", "Agni"],
    correct: "Kartikeya",
    explanation: "Kartikeya, god of war, rides a magnificent peacock mount.",
  },
  {
    q: "In Norse myth, what are Valkyries?",
    options: ["War goddesses", "Elves", "Giantesses", "Sorcerers"],
    correct: "War goddesses",
    explanation: "Valkyries choose slain warriors for Valhalla.",
  },
  {
    q: "The Roman equivalent of Artemis is …",
    options: ["Diana", "Vesta", "Juno", "Minerva"],
    correct: "Diana",
    explanation: "Diana mirrors Artemis as goddess of the hunt and moon.",
  },
  {
    q: "Which Greek god fell in love with his own reflection?",
    options: ["Narcissus", "Adonis", "Hermes", "Eros"],
    correct: "Narcissus",
    explanation: "Narcissus’s vanity led to his transformation into a flower.",
  },
  {
    q: "What is Loki’s daughter Hel’s domain?",
    options: ["Underworld", "Valhalla", "Midgard", "Asgard"],
    correct: "Underworld",
    explanation: "Hel rules over the Norse realm of the dead.",
  },
  {
    q: "In Hinduism, Lakshmi represents …",
    options: ["Wealth and Prosperity", "War", "Knowledge", "Time"],
    correct: "Wealth and Prosperity",
    explanation: "Lakshmi embodies fortune, abundance, and purity.",
  },
  {
    q: "Who gave Perseus the mirrored shield?",
    options: ["Athena", "Hermes", "Zeus", "Hera"],
    correct: "Athena",
    explanation:
      "Athena gifted Perseus the reflective shield to slay Medusa safely.",
  },
  {
    q: "Which Greek hero was known for his long journey home?",
    options: ["Odysseus", "Perseus", "Jason", "Achilles"],
    correct: "Odysseus",
    explanation: "Odysseus’s voyage from Troy is told in the Odyssey.",
  },
  {
    q: "Who created humans in Greek myth?",
    options: ["Prometheus", "Zeus", "Hermes", "Apollo"],
    correct: "Prometheus",
    explanation: "Prometheus fashioned humans from clay and gave them fire.",
  },
  {
    q: "In Egyptian mythology, who devoured souls judged unworthy?",
    options: ["Ammit", "Sobek", "Horus", "Set"],
    correct: "Ammit",
    explanation:
      "Ammit, the Devourer, ate hearts heavier than Ma’at’s feather.",
  },
  {
    q: "The Mayan rain god is …",
    options: ["Chaac", "Kukulkan", "Hunab Ku", "Itzamna"],
    correct: "Chaac",
    explanation: "Chaac wielded a lightning axe to bring rain.",
  },
  {
    q: "The Norse goddess Skadi is associated with …",
    options: ["Winter and Hunting", "War", "Sea", "Fertility"],
    correct: "Winter and Hunting",
    explanation: "Skadi embodies the icy mountains and winter hunts.",
  },
  {
    q: "Which Greek titan swallowed his children?",
    options: ["Cronus", "Atlas", "Hyperion", "Oceanus"],
    correct: "Cronus",
    explanation: "Cronus swallowed his offspring to prevent prophecy.",
  },
  {
    q: "Who was the first woman in Greek mythology?",
    options: ["Pandora", "Eurydice", "Helen", "Ariadne"],
    correct: "Pandora",
    explanation: "Pandora was created by the gods and given a jar of evils.",
  },
  {
    q: "Which Norse god lost a hand to Fenrir?",
    options: ["Tyr", "Odin", "Thor", "Baldr"],
    correct: "Tyr",
    explanation: "Tyr sacrificed his hand to bind the wolf Fenrir.",
  },
  {
    q: "The Hindu god of fire is …",
    options: ["Agni", "Surya", "Varuna", "Indra"],
    correct: "Agni",
    explanation: "Agni conveys offerings to the gods through fire.",
  },
  {
    q: "Who was Persephone’s mother?",
    options: ["Demeter", "Hera", "Athena", "Gaia"],
    correct: "Demeter",
    explanation:
      "Persephone’s abduction by Hades caused Demeter’s grief and winter.",
  },
  {
    q: "What creature did Heracles capture as his first labor?",
    options: ["Nemean Lion", "Hydra", "Boar", "Ceryneian Hind"],
    correct: "Nemean Lion",
    explanation: "The Nemean Lion’s hide was impervious to weapons.",
  },
  {
    q: "Who built the labyrinth in Crete?",
    options: ["Daedalus", "Minos", "Theseus", "Icarus"],
    correct: "Daedalus",
    explanation: "Daedalus designed the labyrinth to imprison the Minotaur.",
  },
  {
    q: "Which Egyptian god was depicted as a scarab beetle?",
    options: ["Khepri", "Horus", "Ra", "Thoth"],
    correct: "Khepri",
    explanation:
      "Khepri symbolized sunrise and rebirth, pushing the solar orb.",
  },
  {
    q: "In Norse mythology, what is Mjölnir?",
    options: ["A hammer", "A spear", "A sword", "A ring"],
    correct: "A hammer",
    explanation: "Mjölnir is Thor’s hammer of thunder and protection.",
  },
  {
    q: "Who is known as the messenger of the Egyptian gods?",
    options: ["Thoth", "Anubis", "Horus", "Ra"],
    correct: "Thoth",
    explanation: "Thoth carried messages and recorded divine decrees.",
  },
  {
    q: "Which Greek goddess turned Actaeon into a stag?",
    options: ["Artemis", "Athena", "Hera", "Demeter"],
    correct: "Artemis",
    explanation: "Artemis punished Actaeon for seeing her bathing.",
  },
  {
    q: "In Hinduism, who is Krishna’s beloved?",
    options: ["Radha", "Sita", "Lakshmi", "Parvati"],
    correct: "Radha",
    explanation: "Radha’s love for Krishna represents devotion to the divine.",
  },
  {
    q: "The Celtic god of light and skill is …",
    options: ["Lugh", "Dagda", "Balor", "Nuada"],
    correct: "Lugh",
    explanation: "Lugh is the many-skilled hero and sun god of the Celts.",
  },
  {
    q: "Who are the Fates in Greek myth?",
    options: ["Weavers of destiny", "Sea nymphs", "Underworld judges", "Muses"],
    correct: "Weavers of destiny",
    explanation: "The Moirai controlled the thread of life for every being.",
  },
  {
    q: "The Hindu goddess Kali is often depicted with …",
    options: ["A necklace of skulls", "A serpent crown", "A lotus", "A flute"],
    correct: "A necklace of skulls",
    explanation:
      "Kali’s fierce imagery represents destruction of ego and ignorance.",
  },
  {
    q: "Who was the Greek god of the forge?",
    options: ["Hephaestus", "Hermes", "Apollo", "Ares"],
    correct: "Hephaestus",
    explanation: "Hephaestus crafted weapons and armor for gods and heroes.",
  },
  {
    q: "What Japanese spirits inhabit natural objects?",
    options: ["Kami", "Oni", "Tengu", "Kitsune"],
    correct: "Kami",
    explanation:
      "Kami are divine spirits within Shinto belief, residing in nature.",
  },
  {
    q: "The Norse creation began from the void called …",
    options: ["Ginnungagap", "Yggdrasil", "Muspelheim", "Niflheim"],
    correct: "Ginnungagap",
    explanation: "Ginnungagap was the primordial void between fire and ice.",
  },
  {
    q: "Which Greek hero defeated the Chimera?",
    options: ["Bellerophon", "Heracles", "Perseus", "Odysseus"],
    correct: "Bellerophon",
    explanation: "With Pegasus, Bellerophon slew the fire-breathing Chimera.",
  },
  {
    q: "In Egyptian myth, who ferries souls to judgment?",
    options: ["Anubis", "Ra", "Osiris", "Thoth"],
    correct: "Anubis",
    explanation: "Anubis guides souls to the Hall of Ma’at for weighing.",
  },
];

function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQ = questions[current];

  const handleAnswer = (option: string) => {
    if (selected) return; // prevent double-clicking
    setSelected(option);
    if (option === currentQ.correct) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  return (
    <section
      id="quiz"
      className="bg-white border-t border-slate-200 py-16 text-center"
    >
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
        Test Your Mythology Knowledge
      </h2>
      <p className="text-slate-700 max-w-2xl mx-auto mb-8">
        Try this short quiz covering world mythologies, a preview of the
        learning experience at Mythology School.
      </p>

      <div className="max-w-2xl mx-auto bg-[#fefbf4] border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 text-left">
        {!finished ? (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-slate-900">
              {current + 1}. {currentQ.q}
            </h3>
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option) => {
                const isSelected = selected === option;
                const isCorrect =
                  selected && option === currentQ.correct && isSelected;
                const isWrong =
                  selected && option !== currentQ.correct && isSelected;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`block cursor-pointer w-full text-left px-4 py-3 rounded-lg border transition ${
                      isSelected
                        ? isCorrect
                          ? "bg-green-100 border-green-400"
                          : "bg-rose-100 border-rose-400"
                        : "border-slate-300 hover:border-yellow-400 hover:bg-yellow-50"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {selected && (
              <div className="mb-6">
                <p className="text-sm text-slate-700 italic">
                  {selected === currentQ.correct
                    ? "✅ Correct!"
                    : "❌ Incorrect."}{" "}
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {selected && (
              <button
                onClick={nextQuestion}
                className="mt-4 bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-indigo-500 transition"
              >
                {current + 1 < questions.length
                  ? "Next Question"
                  : "See Results"}
              </button>
            )}
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Quiz Completed!
            </h3>
            <p className="text-lg text-slate-700 mb-4">
              You scored {score} out of {questions.length}.
            </p>
            <p className="text-slate-600 mb-6">
              Keep exploring myths and deities to master every pantheon.
            </p>
            <button
              onClick={restartQuiz}
              className="bg-yellow-500 text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function MythologyQASection() {
  return (
    <section
      id="qa-section"
      className="bg-white py-16 border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-10">
          Mythology Questions & Answers
        </h2>

        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
          Explore key questions about gods, heroes, and myths from around the
          world. Click <span className="font-semibold">“Show Answer”</span> to
          reveal explanations for each.
        </p>

        <div className="divide-y divide-slate-200">
          {questions.map((item, index) => (
            <details key={index} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer text-slate-800 font-medium text-lg hover:text-indigo-600">
                <span>
                  {index + 1}. {item.q}
                </span>
                <span className="text-slate-500 text-sm group-open:hidden">
                  Show Answer
                </span>
                <span className="text-indigo-600 text-sm hidden group-open:inline">
                  Hide Answer
                </span>
              </summary>

              <div className="mt-3 ml-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-green-700">Answer:</span>{" "}
                  {item.correct}
                </p>
                <p className="text-slate-600 mt-1 text-sm italic">
                  {item.explanation}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MythologyHome() {
  const faqs = [
    {
      q: "What is Mythology School?",
      a: "Mythology School is a free online resource for studying world mythologies. It combines research-based articles, timelines, and quizzes to make mythology education accessible to everyone.",
    },
    {
      q: "Which mythologies are covered?",
      a: "We feature Greek, Norse, Egyptian, Hindu, Celtic, Japanese, and other world mythologies, with ongoing additions as new cultures are researched and verified.",
    },
    {
      q: "Are the articles peer-reviewed or cited?",
      a: "Yes. Each article references academic sources, museum archives, and primary translations to ensure accuracy and cultural respect.",
    },
    {
      q: "Who can use Mythology School?",
      a: "Students, teachers, writers, and enthusiasts can use our resources for education, creative projects, or self-learning.",
    },
    {
      q: "Is it free to access?",
      a: "Yes, all resources are free and open. Premium study tools and printable materials may be offered later to support maintenance.",
    },
    {
      q: "Can I contribute or cite this site?",
      a: "Absolutely. You may cite MythologySchool.com as a general reference and contact us if you'd like to contribute content or translations.",
    },
  ];

  return (
    <main className="bg-[#f8f6ef] text-slate-800 scroll-smooth font-sans">
      {/* Hero */}
      <section className="pt-24 pb-20 text-center bg-gradient-to-b from-[#fefbf4] to-[#f8f6ef]">
        <h1 className="text-5xl sm:text-6xl font-serif font-bold text-slate-900 mb-4">
          Welcome to Mythology School
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
          Explore the stories, gods, heroes, and symbols that shaped cultures
          across the world. A complete mythology learning hub for curious minds.
        </p>
        <a
          href="#topics"
          className="inline-block bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
        >
          Start Learning
        </a>
      </section>

      {/* Quiz Preview */}
      <QuizSection />

      {/* Related Learning Sites */}
      <section
        id="related-sites"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 bg-[#fcfaf6]"
      >
        <h2 className="text-3xl font-serif font-bold text-center mb-6 text-slate-900">
          Explore Related Mythology Learning Sites
        </h2>

        {/* Add SEO-rich intro paragraph */}
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Mythology School is part of a growing educational network dedicated to
          world mythology, ancient history, and cultural literacy. These partner
          sites provide specialized resources that help students, educators, and
          enthusiasts explore mythology through language, stories, and
          interactive learning tools. Each supports the mission of making
          mythology education engaging, research-based, and accessible to all.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WordMythology */}
          <a
            href="https://wordmythology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-400 transition p-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                The Language of Myths
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Explore the linguistic roots of ancient stories.
                WordMythology.com connects Greek, Norse, and Celtic mythologies
                to modern words and phrases, showing how mythology continues to
                shape global language and symbolism.
              </p>
            </div>
            <div className="mt-5 text-right">
              <span className="inline-flex items-center text-yellow-600 font-medium text-sm hover:underline">
                Visit WordMythology.com
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </a>

          {/* LearnGreekMythology */}
          <a
            href="https://learngreekmythology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-400 transition p-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Study Greek Legends
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                LearnGreekMythology.com offers structured mythology lessons,
                timelines, and guides on the Olympian gods, heroes, and epics.
                It’s designed for classrooms, writers, and lifelong learners
                seeking reliable Greek mythology education online.
              </p>
            </div>
            <div className="mt-5 text-right">
              <span className="inline-flex items-center text-yellow-600 font-medium text-sm hover:underline">
                Visit LearnGreekMythology.com
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </a>

          {/* FreeTypingCamp – Mythology */}
          <a
            href="https://freetypingcamp.com/mythology"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-400 transition p-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Mythology Typing Practice
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Learn while you type. This themed typing section helps you
                memorize mythological names, gods, and ancient terms while
                improving accuracy and speed, blending mythology education with
                hands-on skill building.
              </p>
            </div>
            <div className="mt-5 text-right">
              <span className="inline-flex items-center text-yellow-600 font-medium text-sm hover:underline">
                Visit FreeTypingCamp.com
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Add SEO contextual close */}
        <p className="text-center text-slate-600 text-sm mt-12 max-w-3xl mx-auto leading-relaxed">
          Together, these projects create a connected learning ecosystem where
          anyone can study mythology online, explore linguistic history, and
          practice cultural literacy through interactive and research-driven
          education.
        </p>
      </section>

      {/* Featured Mythologies */}
      <section id="topics" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-10">
          Explore Major Mythologies
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Greek Mythology",
              desc: "From Zeus and Athena to the tales of heroes and the Underworld.",
            },
            {
              name: "Norse Mythology",
              desc: "Discover Odin, Thor, Loki, and the poetic Eddas of the North.",
            },
            {
              name: "Egyptian Mythology",
              desc: "Learn about Ra, Isis, Anubis, and the journey through the Duat.",
            },
            {
              name: "Hindu Mythology",
              desc: "Explore the Mahabharata, Ramayana, and the deities Vishnu and Shiva.",
            },
            {
              name: "Celtic Mythology",
              desc: "Dive into druidic lore, Tuatha Dé Danann, and ancient heroic cycles.",
            },
            {
              name: "Japanese Mythology",
              desc: "Understand Amaterasu, Susanoo, and the origins of Shinto legends.",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {m.name}
              </h3>
              <p className="text-sm text-slate-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="mythology-education"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200"
      >
        <h2 className="text-3xl font-serif font-bold text-center mb-8 text-slate-900">
          What Is Mythology Education?
        </h2>
        <p className="text-slate-700 leading-relaxed text-lg mb-6">
          Mythology education is the study of the stories, symbols, and
          traditions that different civilizations used to explain their world.
          It connects history, literature, philosophy, and art, offering a
          deeper understanding of how ancient cultures viewed life, morality,
          and the divine.
        </p>
        <p className="text-slate-700 leading-relaxed text-lg">
          At Mythology School, mythology education combines research-based
          articles, timelines, and quizzes to make learning interactive and
          accessible. Whether you are a student, teacher, or lifelong learner,
          exploring mythology builds cultural literacy and critical thinking
          through timeless stories.
        </p>
      </section>

      <section
        id="why-learn"
        className="max-w-6xl mx-auto px-6 py-20 bg-[#fefbf4] border-t border-slate-200"
      >
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-slate-900">
          Why Learn Mythology?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-700 text-base leading-relaxed">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Understand Culture and History
            </h3>
            <p>
              Myths reflect how ancient societies interpreted creation,
              morality, and power. Studying them helps us understand cultural
              roots and global connections that still influence modern
              storytelling.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Learn Through Stories
            </h3>
            <p>
              From the epics of Greece to the cosmic tales of India, mythology
              teaches wisdom through story. Myths simplify complex ideas, making
              education engaging and memorable.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Build Critical Thinking
            </h3>
            <p>
              Comparing myths across cultures fosters pattern recognition,
              interpretation, and empathy, key skills in both education and
              everyday problem-solving.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-to-learn"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200"
      >
        <h2 className="text-3xl font-serif font-bold text-center mb-8 text-slate-900">
          How to Study Mythology Online
        </h2>
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Learning mythology online is easier than ever. Mythology School offers
          structured materials and interactive quizzes that guide you step by
          step through global myths and cultural stories.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-700">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              1. Start with a Culture
            </h3>
            <p>
              Choose a mythology, such as Greek, Norse, or Egyptian, and learn
              its gods, heroes, and worldviews.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              2. Use Visual Tools
            </h3>
            <p>
              Explore diagrams, timelines, and maps to visualize how myths and
              deities relate to one another across regions.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              3. Test Your Knowledge
            </h3>
            <p>
              Practice with myth-themed quizzes to reinforce memory and discover
              new connections between different cultures.
            </p>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 bg-[#fcfaf6]"
      >
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-slate-900">
          Explore Courses and Study Paths
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Greek Mythology 101",
              desc: "Study the Olympian gods, heroes, and myths that shaped Western literature.",
              href: "/",
            },
            {
              name: "Norse Mythology Basics",
              desc: "Understand Odin, Thor, Loki, and the cosmic world tree Yggdrasil.",
              href: "/",
            },
            {
              name: "Egyptian Mythology & Afterlife",
              desc: "Explore Ra, Isis, and Anubis while learning how ancient Egyptians viewed eternity.",
              href: "/",
            },
            {
              name: "Hindu Mythology & Epics",
              desc: "Learn the sacred stories of the Mahabharata, Ramayana, and their symbolism.",
              href: "/",
            },
            {
              name: "Comparative Mythology",
              desc: "See how creation stories and hero journeys overlap across cultures.",
              href: "/",
            },
            {
              name: "World Mythology Quiz Hub",
              desc: "Challenge yourself with interactive mythology quizzes by region and theme.",
              href: "#quiz",
            },
          ].map((c) => (
            <a
              key={c.name}
              href={c.href}
              className="block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-yellow-400 transition text-slate-800"
            >
              <h3 className="font-semibold text-lg mb-2">{c.name}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <MythologyQASection />

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200"
      >
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {f.q}
              </h3>
              <p className="text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
          About Mythology School
        </h2>

        <p className="text-slate-700 mb-4">
          Mythology School is an independent educational project dedicated to
          the comparative study of world mythology. Our goal is to make
          verified, research-based knowledge about ancient myths, deities, and
          cultural symbols accessible to learners, teachers, and enthusiasts
          worldwide.
        </p>

        <p className="text-slate-700 mb-4">
          All articles and learning materials are written and reviewed by
          mythology researchers, educators, and subject specialists. Every topic
          references primary sources and respected archives to ensure accuracy,
          cultural authenticity, and academic value.
        </p>

        <p className="text-slate-700">
          Mythology School promotes the responsible study of myths through
          critical comparison, historical context, and storytelling. Future
          updates will include interactive timelines, curated bibliographies,
          and thematic online courses designed to help students engage with
          mythology as a living field of study.
        </p>

        <p className="text-xs text-slate-500 mt-8 leading-relaxed italic">
          Reviewed and maintained by the Mythology School Editorial Team •
          Selected reference sources include&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Theogony"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-600"
          >
            Hesiod’s <em>Theogony</em>
          </a>
          ,&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Prose_Edda"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-600"
          >
            Snorri Sturluson’s <em>Prose Edda</em>
          </a>
          ,&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Mahabharata"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-600"
          >
            <em>Mahabharata</em>
          </a>
          , and the&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Ancient_Egyptian_Book_of_the_Dead"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-600"
          >
            <em>Book of the Dead</em>
          </a>
          . Additional context is drawn from museum archives such as the&nbsp;
          <a
            href="https://www.britishmuseum.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-600"
          >
            British Museum
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://www.metmuseum.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-600"
          >
            The Metropolitan Museum of Art
          </a>
          , and general references like&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Mythology"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-600"
          >
            Wikipedia’s Mythology Portal
          </a>
          .
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              ...faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
              ...questions.slice(0, 10).map((q) => ({
                "@type": "Question",
                name: q.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${q.correct}. ${q.explanation}`,
                },
              })),
            ],
          }),
        }}
      />

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-200">
        © {new Date().getFullYear()} MythologySchool.com • An Educational
        Resource for World Mythology
      </footer>
    </main>
  );
}
