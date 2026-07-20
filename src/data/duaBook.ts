import { Chapter } from '../types';

export const duaBookData: Chapter[] = [
  {
    id: "A",
    slug: "a-the-daily-adhkar",
    title: "The Daily Adhkar",
    description: "Essential morning and evening remembrances.",
    duas: [
      { id: 1, topic: "Before Sleeping", arabic: "بِاسْمِكَ اللَّهُمَّ أَموتُ وَأَحْيَا", translation_en: "In Your Name, O Allah, I die and I live.", audioSrc: "/audio/chapter-a/001.mp3" },
      { id: 2, topic: "Upon Waking Up from Sleep", arabic: "الْحَمْدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُورُ", translation_en: "All Praise belongs to Allah, Who gave us life after He caused us to die, and unto Him is the resurrection [back to life].", audioSrc: "/audio/chapter-a/002.mp3" },
      { id: 3, topic: "Before entering the washroom", arabic: "[بِسْمِ اللَّهِ ] اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", translation_en: "[In the Name of Allah]. O Allah! I seek refuge in You from the male and female evil [unclean] spirits.", audioSrc: "/audio/chapter-a/003.mp3" },
      { id: 4, topic: "Upon Exiting the Washroom", arabic: "غُفْرَانَكَ", translation_en: "I seek Your forgiveness.", audioSrc: "/audio/chapter-a/004.mp3" },
      { id: 5, topic: "Wearing a Garment", arabic: "الْحَمْدُ للهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّة", translation_en: "All Praise belongs to Allah, the One who dressed me in this garment and provided me with it without any might or power from me.", audioSrc: "/audio/chapter-a/005.mp3" },
      { id: 6, topic: "Upon Undressing", arabic: "بِسْمِ اللَّهِ", translation_en: "In the Name of Allah", audioSrc: "/audio/chapter-a/006.mp3" },
      { id: 7, topic: "Before Eating & Drinking", arabic: "بِسْمِ اللَّهِ", translation_en: "In the Name of Allah", audioSrc: "/audio/chapter-a/007.mp3" },
      { id: 8, topic: "If one forgets to mention Allāh before eating", arabic: "بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ", translation_en: "In the Name of Allah, in the beginning and the end.", audioSrc: "/audio/chapter-a/008.mp3" },
      { id: 9, topic: "After Eating", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَاوَرَزَقَنِيهِ، ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّة", translation_en: "All Praise belongs to Allah, the One who has fed me this (food) and provided me with it, without any power or might from me.", audioSrc: "/audio/chapter-a/009.mp3" },
      { id: 10, topic: "Thanking Someone", arabic: "جَزَاكَ اللهُ خَيْراً", translation_en: "May Allah reward you with good.", audioSrc: "/audio/chapter-a/010.mp3" },
      { id: 11, topic: "Leaving the Home", arabic: "بِسْمِ اللَّهِ ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", translation_en: "In the Name of Allah I have placed my trust in Allah, and there is no Might or Power except from Allah.", audioSrc: "/audio/chapter-a/011.mp3" },
      { id: 12, topic: "Entering the Home", arabic: "بِسْمِ اللَّهِ [ السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ]", translation_en: "In the Name of Allah [Give the greeting of Salam Upon Entering the Home]", audioSrc: "/audio/chapter-a/012.mp3" },
      { id: 13, topic: "Getting on a Vehicle", arabic: "بِسْمِ اللَّهِ، وَالْحَمْدُ لِلَّهِ سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ", translation_en: "In the Name of Allāh; All Praise belongs to Allāh. O How Perfect is He Who has subdued this (vehicle) to us, and we were not able to do it (on our own). Indeed, unto our Lord we are returning.", audioSrc: "/audio/chapter-a/013.mp3" },
      { id: 14, topic: "Sneezing", arabic: "الْحَمْدُ لِلَّهِ [ يَرْحَمُكَ اللَّهُ : ] يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ", translation_en: "\"All praise belong to Allah.\" ....and his brother or companion should say to him: \"May Allah have mercy upon you.\" ...and he (i.e. the one who sneezed) should reply back to him: \"May Allah guide you and rectify your condition.\"", audioSrc: "/audio/chapter-a/014.mp3" },
      { id: 15, topic: "Anger", arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّحِيمِ", translation_en: "I seek refuge in Allah from the Shaytan.", audioSrc: "/audio/chapter-a/015.mp3" },
      { id: 16, topic: "During Rainfall", arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا", translation_en: "O Allah! Send a beneficial downpour.", audioSrc: "/audio/chapter-a/016.mp3" },
      { id: 17, topic: "Upon Entering the Marketplace", arabic: "لا إله إلا الله وحده لا شريك له ، له المُلْكُ وله الحمد، يُحْيِي وَيُمِيتُ وَهُوَ حَيُّ لا يموت، بِيَدِهِ الْخَيْرُ وَهوَ على كلّ شيءٍ قدير.", translation_en: "There is none worthy of worship except Allah, alone without partners, to Him belong the kingdom and to Him belongs the praise, He gives life and causes death, in His Hand is all good, and He has power over all things.", audioSrc: "/audio/chapter-a/017.mp3" },
      { id: 18, topic: "Atonement for the Gathering", arabic: "سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.", translation_en: "You are free from imperfection, O Allāh, and to You belongs the praise, I bear witness that nothing has the right to be worshiped except You. I seek Your forgiveness and I turn to You in repentance.", audioSrc: "/audio/chapter-a/018.mp3" }
    ]
  },
  {
    id: "B",
    slug: "b-knowledge",
    title: "B. Knowledge",
    description: "Supplications for increasing beneficial knowledge.",
    duas: [
      { id: 19, topic: "Increase in Knowledge", arabic: "رَّبِّ زدني علما", translation_en: "O my Lord increase me in knowledge", audioSrc: "/audio/chapter-b/019.mp3" },
      { id: 20, topic: "Asking Allāh for Beneficial Knowledge", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاًوَرِزْقاً طيباًوَعَمَلاً مُتَقَبَّلاً", translation_en: "O Allah, verily I ask of You beneficial knowledge, wholesome provisions, anddeeds that are acceptable.", audioSrc: "/audio/chapter-b/020.mp3" },
      { id: 21, topic: "Knowledge that Benefits", arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَ عَلَّمْنِي مَا يَنْفَعُنِي وَ زِدْنِي عِلْمًا", translation_en: "O Allah, benefit me with what You have taught me, and teach me that which benefit me, and increase me in knowledge.", audioSrc: "/audio/chapter-b/021.mp3" },
      { id: 22, topic: "Confidence, Ease of Task & Eloquence", arabic: "رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي", translation_en: "\"O my Lord! Open for me my chest and ease my task for me. And make loose the knot from my tongue, that they understand my speech.\"", audioSrc: "/audio/chapter-b/022.mp3" },
      { id: 23, topic: "Understanding of the Deen", arabic: "اللَّهُمَّ فَقَهْنِي فِي الدِّينِ", translation_en: "O Allah, grant me the understanding of the deen (religion or way of life).", audioSrc: "/audio/chapter-b/023.mp3" },
      { id: 24, topic: "Safeguard of Affairs in Deen & Dunya and thehereafter", arabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي", translation_en: "O Allah, set right my religion, which is the safeguard of my affairs; and set right my world, wherein is my living; And set right my next life, to which ismy return", audioSrc: "/audio/chapter-b/024.mp3" }
    ]
  },
  {
    id: "C",
    slug: "c-sickness-and-ruqya",
    title: "C. Sickness & Ruqya",
    description: "Authentic prayers for healing and visiting the sick.",
    duas: [
      { id: 25, topic: "Visiting the Sick", arabic: "لَا بَأْسَ طَهُورُ إِنْ شَاءَ اللَّهُ. أَسْأَلُ اللهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ، أَنْ يَشْفِيَكَ.", translation_en: "[This sickness is] not harmful. Rather, it is a means of purification, if Allah Wills.' I ask Allah, the Supreme, Lord of the Magnificent Throne, to make you well. (To be recited seven times)", audioSrc: "/audio/chapter-c/025.mp3" },
      { id: 26, topic: "Healing & Good Health", arabic: "اللَّهُمَّ رَبَّ النَّاسِأَذْهِبَ الْبَأْسَوَاشْفِأَنْتَ الشافي لا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَماً", translation_en: "O Allah, Lord of mankind, do away with my suffering. Heal (me) as You are the only Healerand there is no cure except that of Yours, it is that which leaves no ailment behind", audioSrc: "/audio/chapter-c/026.mp3" },
      { id: 27, topic: "Pain in the Body", arabic: "بِسْمِ اللَّهِ أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ ()۷", translation_en: "In the name of Allah (3 times) I seek refuge in Allah and His complete power and ability from the evil of what I feel and am wary of. (7 times)", audioSrc: "/audio/chapter-c/027.mp3" }
    ]
  },
  {
    id: "D",
    slug: "d-seeking-forgiveness",
    title: "D. Seeking Forgiveness & Pardon",
    description: "Pleas for mercy and purification from sins.",
    duas: [
      { id: 28, topic: "Sayyid al- Istighfar: The Master Supplication for Seeking Forgiveness", arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُأَبُوءُ لَكَ بِنِعْمَتِكَ عَلَىوَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", translation_en: "O Allah, You are my Lord, there is nothing which deserves to be worshipped except You; You have created me and I am Your servant; and I am obligated to fulfill Your covenant [i.e. that I made with You] and Your promise [i.e. that I made to you] as much as I can. I seek refuge in You from the evil of what I have done. acknowledge Your favors upon me, and I acknowledge my sins; so forgive me, for indeed no one forgives sins except You.", audioSrc: "/audio/chapter-d/028.mp3" },
      { id: 29, topic: "Seeking Forgiveness", arabic: "أَسْتَغْفِرُ اللَّهَ أَسْتَغْفِرُ اللهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الحَيُّ القَيُّومُ وَأَتُوبُ إليه", translation_en: "I seek Allah's forgiveness I seek the forgiveness of Allah, there is no true god except Allah, the Ever-Living, the Self-Subsisting, and I turn to Him in repentance.", audioSrc: "/audio/chapter-d/029.mp3" },
      { id: 30, topic: "Seeking Allah's Pardon", arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", translation_en: "O Allah, indeed You are pardoning, You love to pardon, so pardon me.", audioSrc: "/audio/chapter-d/030.mp3" }
    ]
  },
  {
    id: "E",
    slug: "e-seeking-refuge",
    title: "E. Seeking Refuge & Protection",
    description: "Prayers for protection from harm and evil.",
    duas: [
      { id: 31, topic: "Protection from Shirk", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ", translation_en: "O Allah, I seek refuge in You from knowingly associating partners with You, and I seek Your forgiveness for that which I do not know.", audioSrc: "/audio/chapter-e/031.mp3" },
      { id: 32, topic: "Protection from Laziness", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ", translation_en: "O Allah, I seek refuge in You from inability/weakness & laziness/lethargy.", audioSrc: "/audio/chapter-e/032.mp3" },
      { id: 33, topic: "Seeking refuge from theknowledge that does not benefit", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ وَمِنْ نَفْسٍ لَا تَشْبَعُ وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا", translation_en: "O Allah, I seek refuge in You from knowledge which doe s not benefit, from a heart which does not fear (You), from a soul which is never satisfied, and from a supplication which is not answered.", audioSrc: "/audio/chapter-e/033.mp3" },
      { id: 34, topic: "Seeking refuge against the declining of Allah'sblessings", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ", translation_en: "O Allah, I seek refuge in You against the declining of Your favours, passing of safety, the suddenness of Your punishment and all that which displeases You.", audioSrc: "/audio/chapter-e/034.mp3" },
      { id: 35, topic: "When something becomes Difficult", arabic: "اللهم لا سهل إلا ما جَعَلَتَه سَهلًا، وأَنتَ تَجْعَلُ الحَزْنَ إِذا شِئتَ سَهلًا", translation_en: "O Allah, nothing is easy but that which You make easy, and You can make hardships easy if You will.", audioSrc: "/audio/chapter-e/035.mp3" },
      { id: 36, topic: "Protection from Evil Character, Deeds & Desires", arabic: "اللَّهمَّ إِنِّي أَعُوذُ بِكَ مِن مِنْكَرَاتِ الأَخلاق، والأَعْمَالِ، والأهواء", translation_en: "O Allah, I seek refuge in You from evil character and actions, [evil] desires.", audioSrc: "/audio/chapter-e/036.mp3" },
      { id: 37, topic: "Seeking refuge from deviance after guidance", arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ.", translation_en: "\"Our Lord! Let not our hearts deviate )from the truth) after You have guided us, and grant us mercy from You. Truly, You are the Bestower.\"", audioSrc: "/audio/chapter-e/037.mp3" },
      { id: 38, topic: "Refuge from beingovertaken by destruction", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ", translation_en: "O Allah, I seek refuge in You from the anguish of tribulation, the lowest depths of misery, the bad of what is decreed and the malice of enemies", audioSrc: "/audio/chapter-e/038.mp3" }
    ]
  },
  {
    id: "F",
    slug: "f-istikhaara",
    title: "F. Istikhāra - Seeking Allah's Guidance",
    description: "The prayer for seeking guidance in decisions.",
    duas: [
      { id: 39, topic: "Istikhāra - Seeking Allah's Guidance", arabic: "اللَّهُمَّ إِنِّي أَسْتَخِيْرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُوَأَنْتَ عَلَامُ الْغُيُوبِ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ (ثم تسميه باسمه بعينه) خَيْرٌ لي فِي دِينِي وَمَعَاشِي وَعَاجِلِ أَمْرِي وَآجِلِهِ، فَاقْدُرْهُ لِي، وَيَسَّرْهُ لِي، ثُمَّ بَارِكْ لِي فِيهِ. وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرُّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي، وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ، ثُمَّ رَضَّنِي بِهِ.", translation_en: "O Allah, I seek Your guidance [in making a choice] by virtue of Your knowledge, and I seek ability by virtue of Your power, and I ask You of Your great bounty. You have power, I have none. And You know, I know not. You are the knower of hidden things. O Allah, if in Your knowledge this matter (then mention the specific matter) is good for me both in this world and in the Hereafter (or: in my religion, my livelihood, and my affairs), then ordain it for me, make it easy for me, and bless it for me. And if in Your knowledge it is bad for me and for my religion my livelihood, and my affairs (or: for me both in this world and the next then turn me away from it, [and turn it away from me], and ordain for me the good wherever it may be and make me pleased with it.", audioSrc: "/audio/chapter-f/039.mp3" }
    ]
  },
  {
    id: "G",
    slug: "g-asking-allah",
    title: "G. Asking Allāh - Beautiful Supplications",
    description: "General profound supplications to Allah.",
    duas: [
      { id: 40, topic: "The Truth at all times", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ كَلِمَةَ الحَقِّ فِي الرضا والغَضَب", translation_en: "O Allah, I ask you for the word of truth in times of contentmentand anger.", audioSrc: "/audio/chapter-g/040.mp3" },
      { id: 41, topic: "Asking Allāh for Eemānand Guidance", arabic: "اللَّهُمَّ زَيَّنَّا بِزِينَةِ الإِيمَانِ وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ", translation_en: "O Allah, beautify us with the adornment of faith and make us among those who guide and are rightly guided.", audioSrc: "/audio/chapter-g/041.mp3" },
      { id: 42, topic: "Asking for a life ofcoolness after death", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الرِّضا بَعْدَ القضاء، وَأَسْأَلُكَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ", translation_en: "O Allah, I ask You for pleasure after Your Judgment and I ask You for a life of coolness after death.", audioSrc: "/audio/chapter-g/042.mp3" },
      { id: 43, topic: "Asking Allāh for the joy of Meeting Him", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ ، وَالشَّوْقَ إِلى لِقَائِكفي غَيْرِ ضَرَاءَ مُضِرَّة وَلَا فِتْنَةٍ مُضلَّة", translation_en: "O Allah, I ask You for the delight of gazing upon Your Face, and the joy of meeting You, without any harm and misleading trials befalling me.", audioSrc: "/audio/chapter-g/043.mp3" },
      { id: 44, topic: "Asking Allāh to bestow mercy on our Parents", arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", translation_en: "My Lord! Bestow on them Your Mercy as they did bring me up when I was small.", audioSrc: "/audio/chapter-g/044.mp3" },
      { id: 45, topic: "Asking Allāh for Jannah and Protection from the Fire", arabic: "اللهُمَّ إِنِّي أَسْأَلُكَ الجَنَّةَ وَأَعُوذُ بِكَ مِنَ النار", translation_en: "O Allah, I ask You for Paradise, and I seek Your protection from the Fire.", audioSrc: "/audio/chapter-g/045.mp3" },
      { id: 46, topic: "Asking Allāh for His Love", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ", translation_en: "O Allah, I ask You for Your Love, and the love of whoever loves You, and the love of deeds that will bring me closer to Your Love.", audioSrc: "/audio/chapter-g/046.mp3" },
      { id: 47, topic: "Supplicating Allāh using His Greatest Name", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّي أَشْهَدُ أَنَّكَ أَنْتَ اللهُ لا إلهَ إِلا أَنْتِ الأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُواً أَحَد", translation_en: "O Allah, I ask You, I bear witness that there is none worthy of worship but You, the One, the Self-Sufficient Master Whom all creatures need, Who begets not, nor was He begotten, And there is none coequal or comparable to Him [\"He has asked Allah by His Name by which when asked, He gives, and by which when supplicated, He answers.\"]", audioSrc: "/audio/chapter-g/047.mp3" },
      { id: 48, topic: "Asking Allāh for the Good in this Life and the Hereafter", arabic: "رَبَّنَا ءَاتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْشَاخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", translation_en: "\"Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire!\"", audioSrc: "/audio/chapter-g/048.mp3" },
      { id: 49, topic: "Asking Allāh for Taqwa and Purification", arabic: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكَّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا أَنْتَ وَلِيُّهَا وَمَوْلَاهَا", translation_en: "O Allah, Grant my soul its Taqwa (piety), and purify it. You are the best of those who purify it. You are its Walee (Supporter) and its Mawla (Guardian/Patron).", audioSrc: "/audio/chapter-g/049.mp3" },
      { id: 50, topic: "Asking Allāh for Guidance and Piety", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالْتَقَى وَالْعَفَافَ وَالْغِنَى", translation_en: "O Allah, indeed, I ask You for guidance, piety, chastity, and sufficiency", audioSrc: "/audio/chapter-g/050.mp3" }
    ]
  },
  {
    id: "H",
    slug: "h-quran-supplications",
    title: "H. Supplications from the Qur'an",
    description: "Powerful Du'as mentioned directly in the Qur'an.",
    duas: [
      { id: 51, topic: "Mercy", arabic: "رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّحِمِينَ )", translation_en: "My Lord! Forgive and have mercy, for You are the Best of those who show mercy!", audioSrc: "/audio/chapter-h/051.mp3" },
      { id: 52, topic: "Justice", arabic: "رَبَّنَا لَا تَجْعَلْنَا مَعَ الْقَوْمِ الظَّلِمِينَ", translation_en: "Our Lord! Place us not with the people who are Zalimun (polytheists and wrong-doers).", audioSrc: "/audio/chapter-h/052.mp3" },
      { id: 53, topic: "Sufficient Alone is Allāh", arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", translation_en: "\"Allah is sufficient for me. La ilaha illa Huwa (none has the right to be worshipped butHe), in Him I put my trust and He is the Lord of the Mighty Throne.", audioSrc: "/audio/chapter-h/053.mp3" },
      { id: 54, topic: "Die as Muslims", arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ )", translation_en: "Our Lord! pour out on us atience, and cause us to die as Muslims.", audioSrc: "/audio/chapter-h/054.mp3" },
      { id: 55, topic: "Forgiveness for all the believers", arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَلِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ", translation_en: "Our Lord! Forgive me and my parents, and (all) the believers on the Day when the reckoningwill be established.", audioSrc: "/audio/chapter-h/055.mp3" },
      { id: 56, topic: "Affairs in the Right Way", arabic: "رَبَّنَا ءَاتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا", translation_en: "Our Lord! Bestow on us mercy from Yourself, and facilitate for us our affair in the right way!", audioSrc: "/audio/chapter-h/056.mp3" },
      { id: 57, topic: "Home in Paradise", arabic: "رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ", translation_en: "My Lord! Build for me a home with You in Paradise", audioSrc: "/audio/chapter-h/057.mp3" }
    ]
  },
  {
    id: "I",
    slug: "i-prophets-supplications",
    title: "I. Supplications of the Prophets",
    description: "Du'as made by the Prophets of Allah.",
    duas: [
      { id: 58, topic: "Aadam عليه السلام", arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَسِرِينَ", translation_en: "\"Our Lord! We have wronged ourselves. If You forgive us not, and bestow not upon us Your Mercy, we shall certainly be the losers.\"", audioSrc: "/audio/chapter-i/058.mp3" },
      { id: 59, topic: "Sulaiman عليه السلام", arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَلِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ", translation_en: "\"My Lord! Inspire and bestow upon me the power and ability that I may be grateful for Your Favours which You have bestowed on me and on my parents, and that I may do righteous good deeds that will please You, and admit me by Your Mercy among Your righteous slaves.\"", audioSrc: "/audio/chapter-i/059.mp3" },
      { id: 60, topic: "Ibraheem عليه السلام", arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", translation_en: "\"O my Lord! Make me one who performs As- Salat (Iqamat-as- Salat), and (also) from my offspring, our Lord! And accept my invocation. \"Allah (Alone) is Sufficient for us, and He is the Best Disposer of affairs (for us).\"", audioSrc: "/audio/chapter-i/060.mp3" },
      { id: 61, topic: "Yunus عليه السلام", arabic: "لَّا إِلَهَ إِلَّا أَنتَ سُبْحَنَكَ إِنِّي كُنتُ مِنَ الظَّلِمِينَ", translation_en: "There is none worthy of worship but You, Pure are You, Indeed I was from the transgressors", audioSrc: "/audio/chapter-i/061.mp3" },
      { id: 62, topic: "Musa عليه السلام", arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", translation_en: "\"My Lord! Truly, I am in need of whatever good that You bestow on me!\"", audioSrc: "/audio/chapter-i/062.mp3" }
    ]
  },
  {
    id: "J",
    slug: "j-before-sleeping",
    title: "J. Adhkar Before Sleeping",
    description: "Remembrances to recite before going to bed.",
    duas: [
      { id: 63, topic: "Al Baqarah - Ayah 285 & 286", arabic: "ءَامَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلُّ ءَامَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ) لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ * رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ )", translation_en: "The Messenger (Muhammad) believes in what has been sent down to him from his Lord, and (so do) the believers. Each one believes in Allāh, His Angels, His Books, and His Messengers. They say, \"We make no distinction between one another of His Messengers\" - and they say, \"We hear, and we obey. (We seek) Your Forgiveness, our Lord, and to You is the return (of all).\" Allah burdens not a person beyond his scope. He gets reward for that (good) which he has earned, and he is punished for that (evil) which he has earned. \"Our Lord! Punish us not if we forget or fall into error, our Lord! Lay not on us a burden like that which You did lay on those before us Jews and Christians); our Lord! Put not on us a burden greater than we have strength to bear. Pardon us and grant us Forgiveness. Have mercy on us. You are our Maula (Patron, Suppor-ter and Protector, ) and give us victory over the disbelieving etc. people.", audioSrc: "/audio/chapter-j/063.mp3" }
    ]
  },
  {
    id: "K",
    slug: "k-morning-evening",
    title: "K. Morning & Evening Adhkār",
    description: "The daily protective morning and evening prayers.",
    duas: [
      { id: 64, topic: "Ayatul Kursi", arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ علمه إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَوَتِ وَالْأَرْضَ وَلَا يَعُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ", translation_en: "Allah! La ilaha illa Huwa (none has the right to be worshipped but He), the Ever Living, the One Who sustains and protects all that exists. Neither slumber, nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on earth. Who is he that can intercede with Him except with His Permission? He knows what happens to them (His creatures) in this world, and what will happen to them in the Hereafter. And they will never compass anything of His Knowledge except that which He wills. His Kursi extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them. And He is the Most High, the Most Great. [This Verse 2:255 is called Ayat-ul-Kursi.]", audioSrc: "/audio/chapter-k/064.mp3" },
      { id: 65, topic: "An Nās (three times)", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ", translation_en: "Say: \"I seek refuge with (Allah) the Lord of mankind, \"The King of mankind, \"The Ilah (God) of mankind, \"From the evil of the whisperer (devil who whispers evil in the hearts in one's heart after one remembers \"Who in breasts of mankind, \"Of jinns and men.\"", audioSrc: "/audio/chapter-k/065.mp3" },
      { id: 66, topic: "Al Falaq (three times)", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ ) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ)", translation_en: "Say: \"I seek refuge with (Allah) the Lord of the daybreak, \"From the evil of what He has created; \"And from the evil of the darkening (night) as it comes with its darkness; (or the moon as it sets or goes away). \"And from the evil of the witchcrafts when they blow in the knots, \"And from the evil of the envier when he envies.\"", audioSrc: "/audio/chapter-k/066.mp3" },
      { id: 67, topic: "Al Ikhlas (three times)", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", translation_en: "Say (O Muhammad): \"He is Allāh, (the) One. \"Allah-us-Samad (The Self-Sufficient Master, Whom all creatures need, He neither eats nor drinks). \"He begets not, nor was He begotten; \"And there is none co-equal or comparable unto Him.\"", audioSrc: "/audio/chapter-k/067.mp3" },
      { id: 68, topic: "The Protective Name of Allah", arabic: "بسم الله الذي لا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأرْضِ وَلا في السّماءِ وهو السميع العليم .", translation_en: "In the name of Allah, with whose name nothing is harmed on the earth nor in the heavens, and He is the All-Hearing [as-Samee']the All- Knowing [al-'Aleem]", audioSrc: "/audio/chapter-k/068.mp3" },
      { id: 69, topic: "Seeking Relief from Hardships", arabic: "يا حَيُّ يا قيّومُ بِرَحْمَتِكِ أَسْتَغِيثِ ، أَصْلِحْ لي شأني كله ، وَلا تَكِلني إِلى نَفْسي طَرْفَةَ عَين", translation_en: "O Ever-Living One, O Eternal One, by Your mercy I call on You to set right all my affairs. Do not place me in charge of my soul even for the blinking of an eye (i.e. a moment).", audioSrc: "/audio/chapter-k/069.mp3" },
      { id: 70, topic: "Seeking Refuge in the Perfect words of Allah", arabic: "أعوذُ بِكَلِماتِ اللهِ التَّامَّاتِ مِنْ شَرِّ ما خَلَق", translation_en: "I seek refuge in the Perfect Words of Allah from the evil (that comes from) what He has created", audioSrc: "/audio/chapter-k/070.mp3" },
      { id: 71, topic: "Being Pleased with Allah", arabic: "رَضِيتُ بِاللهِ رَبَّاً وَبِالإِسْلامِ ديناً وَبِمُحَمَّدٍ نبياً .", translation_en: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace and blessings of Allah be upon him) as my Prophet.", audioSrc: "/audio/chapter-k/071.mp3" },
      { id: 72, topic: "Allah's Perfection & Praise", arabic: "سُبْحانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضا نَفْسِهِ، وَزِنَةَ عَرْشِه وَمِدادَ كَلِمَاتِه .", translation_en: "Glory is to Allāh and praise is to Him, by the multitude of His creation, by His Pleasure, by the weight of His Throne, and by the extent of His Words.", audioSrc: "/audio/chapter-k/072.mp3" },
      { id: 73, topic: "Affirmation of Tawheed", arabic: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", translation_en: "None has theright to be worshipped except Allāh, alone, without partner; To Him belongs all sovereignty and praise; and He is, over all things, Omnipotent", audioSrc: "/audio/chapter-k/073.mp3" }
    ]
  },
  {
    id: "L",
    slug: "l-wudoo-salah",
    title: "L. Wudoo' & Salah Adhkār",
    description: "Supplications for ablution and prayer.",
    duas: [
      { id: 74, topic: "Upon Completing Ablution (Wudoo')", arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُوَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ", translation_en: "I bear witness that nothing deserves to be worshipped except Allah Alone without any Partner and I bear witness that Muhammad is His servant and His Messenger", audioSrc: "/audio/chapter-l/074.mp3" },
      { id: 75, topic: "After Completing Ablution (Wudoo')", arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ", translation_en: "O Allah, make me among those who turn to You in repentance And make me among those who purify themselves.", audioSrc: "/audio/chapter-l/075.mp3" },
      { id: 76, topic: "Upon Hearing the Shahadah in the Adhān - before completing the Adhān", arabic: "أَشْهَدُ أَنْ لا إلهَ إِلَّا اللهُ وَحْدَهُ لا شَريكَ لَه ، وَأَنَّ مَحَمَّداً عَبْدُهُ وَرَسُولُهُرَضِيتُ ، بِاللهِ رَبَّاً ، وَبِمُحَمَّدٍ رَسُولاً وَبِالإِسْلامِ ديناً", translation_en: "I bear witness that nothing has the right to be worshiped except Allah, alone without partners, and Muhammad is His slave and His Messenger. I am pleased with Allāh as Lord, and with Muhammad as a Messenger, and Islam as a religion.", audioSrc: "/audio/chapter-l/076.mp3" },
      { id: 77, topic: "Upon Hearing the Adhān", arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاةِ القَائِمَة آتِ مُحَمَّداً الوسيلة والفضيلة وَابْعَثْه مقاماً محموداً الَّذِي وَعَدْتَه", translation_en: "O Allah, Lord of this perfect call and the prayer to be offered, grant Muhammad the privilege and also the eminence, and resurrect him to the praised position that You have promised.", audioSrc: "/audio/chapter-l/077.mp3" },
      { id: 78, topic: "When Entering The Masjid", arabic: "بِسْمِ اللهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ الله اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", translation_en: "In the Name of Allah And may Salāt (praise) and Salām (peace, safety and security) be upon the Messenger of Allah. O Allah, open for me the doors of Your Mercy.", audioSrc: "/audio/chapter-l/078.mp3" },
      { id: 79, topic: "When Exiting The Masjid", arabic: "بِسْمِ اللهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ الله اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", translation_en: "In the Name of Allah And may Salāt (praise) and Salām (peace, safety, security) be upon the Messenger of Allāh O Allah! I ask of You Your Bounty!", audioSrc: "/audio/chapter-l/079.mp3" },
      { id: 80, topic: "Du'a' 'Al- Istiftāh", arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ اللَّهُمَّ بَاعِدْ بَيْنِي وبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ المَشْرِقِ وَالْمَغْرِبِ اللَّهُمَّ نَقْنِي مِن خَطَايَايَ كما يُنَقَّى القَوْبُ الْأَبْيَضُ مِنَ الدَّنَسِاللَّهُمَّ اغْسِلْنِي مِن خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ", translation_en: "O how Perfect You are, O Allah, and all Praise belongs to You. Blessed is Your Name and Exalted is Your Majesty, and there is no one worthy of worship besides You'. O Allah, separate me from my sins as You have separated the East from the West. O Allāh, cleanse me of my transgressions as the white garment is cleansed of stains. O Allah, wash away my sins with ice and water and frost.", audioSrc: "/audio/chapter-l/080.mp3" }
    ]
  },
  {
    id: "M",
    slug: "m-rukoo",
    title: "M. Supplications in the Rukoo'",
    description: "Adhkar to be recited while bowing in prayer.",
    duas: [
      { id: 81, topic: "Ar-Rukoo'", arabic: "سُبْحانَ رَبِّيَ الْعَظيم سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي سُبُّوحٌقُدُّوسُرَبُّ المَلَائِكَةِ سُبْحَانَ ذِي الْجِبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ", translation_en: "My Lord the Great is free from imperfection. Glory is to You, O Allah, our Lord, and praise is Yours. O Allah, forgive me. O How Perfect You are, Most Pure (free of any defects), Lord of the and the Spirit O How Perfect You are, Owner of Absolute Power, Sovereignty, Greatness and Majesty", audioSrc: "/audio/chapter-m/081.mp3" },
      { id: 82, topic: "Rising up from Rukoo'", arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَه", translation_en: "Allah hears those who praise Him.", audioSrc: "/audio/chapter-m/082.mp3" },
      { id: 83, topic: "Upon Standing from Rukoo'", arabic: "رَبَّنَا وَلَكَ الحَمْدُ حَمْداً كثيراً طيباً مباركاً فيه مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ، وَمَا بَيْنَهُمَا، وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ. أَهلَ الثَّناءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدُ اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدَّ مِنْكَ الجَدُّ", translation_en: "Our Lord, and to You is the praise, much praise and good containing blessings. (A praise that) fills the heavens and the earth and what lies between them, and whatever else You please. (You Allāh) are most worthy of praise and majesty, and what the slave has said - we are all Your slaves. O Allah, there is none who can withhold what You give, and none may give what You have withheld. And the might of the mighty person cannot benefit him against You.", audioSrc: "/audio/chapter-m/083.mp3" }
    ]
  },
  {
    id: "N",
    slug: "n-sajdah",
    title: "N. Supplications in the Sajdah",
    description: "Adhkar to be recited while prostrating.",
    duas: [
      { id: 84, topic: "As-Sujood", arabic: "سُبْحانَ رَبِّيَ الأَعْلَى", translation_en: "My Lord the Most High is free from imperfection.", audioSrc: "/audio/chapter-n/084.mp3" },
      { id: 85, topic: "Duā in Sujud", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَوَبِمُعَافَاتِكَ ، مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ", translation_en: "O Allah, I seek refuge in Your pleasure from Your anger and in Your pardon from Your punishment. I seek refuge in You from You. I am not able to enumerate Your praise. You are as You have praised Yourself", audioSrc: "/audio/chapter-n/085.mp3" },
      { id: 86, topic: "Between Sajdah", arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ رَبِّ اغْفِرْ لِي رَبِّ اغْفِرْ لِي اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاجْبُرْنِي، وَارْفَعْنِي وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي", translation_en: "O Changer of the hearts, make my heart firm upon Your religion My Lord forgive me, my Lord forgive me. O Allah, forgive me, have mercy on me, console me, raise me in status, guide me, grant me well-being, and grant me provision.", audioSrc: "/audio/chapter-n/086.mp3" }
    ]
  },
  {
    id: "O",
    slug: "o-tashahhud",
    title: "O. Supplications between Sajdah & Tashahhud",
    description: "Prayers during sitting and concluding Salah.",
    duas: [
      { id: 87, topic: "At-Tashahhud", arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", translation_en: "All compliments, prayers, and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us, and on the righteous slaves of Allah. I bear witness that none has the right to be worshiped except Allah, and I bear witness that Muhammad is His slave and Messenger.", audioSrc: "/audio/chapter-o/087.mp3" },
      { id: 88, topic: "As-Salāt Al Ibrahimiyyah", arabic: "اللَّهُمَّ صَلَّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدُ اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.", translation_en: "O Allah, send salutationsupon Muhammad and upon the family of Muhammad, just as you sent salutations upon Ibrahim and upon the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory. O Allāh, bless Muhammad and the family of Muhammad, just as You blessed Ibrahim and the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory.", audioSrc: "/audio/chapter-o/088.mp3" },
      { id: 89, topic: "Du'a' after the Tashahhud Before the Tasleem", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابٍ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ", translation_en: "O Allah, I seek refuge with You from the punishment of the grave, and from the punishment of the Hell-fire, and from the trials of the Life and the death, and from the turmoil of the trials of the False Messiah (Dajjal).", audioSrc: "/audio/chapter-o/089.mp3" },
      { id: 90, topic: "Duā after the Tashahhud -Before the Tasleem", arabic: "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي أَنْتَ الْمُقَدِّمُ، وَأَنْتَ الْمُؤَخِّرُ لَا إِلَهَ إِلَّا أَنْتَ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ, وَارْحَمْنِي إِنَّكَ أَنْتَ الغَفُورُ الرَّحِيمُ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِوَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَعَذَابِ القَبْر", translation_en: "O Allah, I seek refuge with You from the punishment of the grave, and from thepunishment of the Hell-fire, and from thetrials of the Life and the dream and fromthe turmoil of the trials of the False Messiah (Dajjal). O Allah, verily I have wronged my soultremendously, and no one forgives sinsexcept You; thus, forgive me with aforgiveness from You and have mercyupon me. Verily, You are the Oft- Forgiving, the Most Merciful. O Allah, I seek Your protection frommiserliness, I seek Your protection fromcowardice, and I seek Your protectionfrom being returned to feeble old age. Iseek Your protection from the trials ofthis world and from the torment of thegrave.", audioSrc: "/audio/chapter-o/090.mp3" },
      { id: 91, topic: "Adhkar after the Tasleem", arabic: "أَسْتَغْفِرُ اللهَ ()۳. اللّهُمَّ أَنْتَ السَّلامُ وَمِنْكَ السَّلام تَبارَكْتَ يا ذا الجلال والإكرام", translation_en: "O Allah, You are the One Who is free fromall defects and deficiencies, and from Youis all peace; blessed are You, O Possessorof majesty and honor.", audioSrc: "/audio/chapter-o/091.mp3" },
      { id: 92, topic: "Adhkar after the Salah", arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ سُبْحَانَ اللهِ، وَالْحَمْدُ لِلَّهِوَاللَّهُ ، أَكْبَرُ (۳۳) لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرُ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدَّ مِنْكَ الجَدُّ", translation_en: "O Allah! Help me to remember You, and to be thankful to You, and toworship You in the best manner. Allah is free from imperfection, All Praisebelongs to Allah, Allah is the greatest. (33) There is none worthy of worship exceptAllāh, alone without any partner. Thekingdom and praise belong to Him, andHe has power over everything. None has the right to be worshipped butAllah alone, He has no partner, His is thedominion and His is the praise, and He isAble to do all things. O Allāh, there is nonewho can withhold what You give, andnone may give what You have withheld, and the might of the mighty personcannot benefit him against You.", audioSrc: "/audio/chapter-o/092.mp3" }
    ]
  },
  {
    id: "P",
    slug: "p-simple-dhikr",
    title: "P. Simple Phrases of Dhikr",
    description: "Short, highly rewarding phrases of remembrance.",
    duas: [
      { id: 95, topic: "Tasbeeh", arabic: "سُبحَانَ الله", translation_en: "I declare Allāh free of all imperfections.", audioSrc: "/audio/chapter-p/095.mp3" },
      { id: 96, topic: "Tahmeed", arabic: "الحمدُ لله", translation_en: "All Praise is for Allāh", audioSrc: "/audio/chapter-p/096.mp3" },
      { id: 97, topic: "Tahleel", arabic: "لَا إِلَهَ إِلَّا اللَّهُ", translation_en: "Nonehastherighttobeworshippedexcept Allāh", audioSrc: "/audio/chapter-p/097.mp3" },
      { id: 98, topic: "Takbeer", arabic: "اللهُ أَكْبَرُ", translation_en: "Allah is greater than everything", audioSrc: "/audio/chapter-p/098.mp3" },
      { id: 99, topic: "Hawqalah", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", translation_en: "There is no change (from one state to another) and no ability (to do that) except with the aid of Allah", audioSrc: "/audio/chapter-p/099.mp3" },
      { id: 100, topic: "Istighfar", arabic: "اسْتَغْفِرُ الله", translation_en: "I ask for Allah's forgiveness", audioSrc: "/audio/chapter-p/100.mp3" },
      { id: 101, topic: "Salat on the Prophet", arabic: "صلى الله عليه وسلم", translation_en: "Peace and Blessings of Allah be upon the Prophet", audioSrc: "/audio/chapter-p/101.mp3" },
      { id: 102, topic: "Beloved to Allah", arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ", translation_en: "Allah is free from imperfection and all praise is due to Him, Allah is free from imperfection the Almighty", audioSrc: "/audio/chapter-p/102.mp3" }
    ]
  },
  {
    id: "Q",
    slug: "q-ramadan",
    title: "Q. Ramadan Related Adhkār",
    description: "Supplications specific to fasting and Ramadan.",
    duas: [
      { id: 104, topic: "Invocation said Upon breaking the Fast", arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ", translation_en: "The thirst has gone, the veins havebeen filled, and the reward has beenaffirmed, if Allah wills.", audioSrc: "/audio/chapter-q/104.mp3" }
    ]
  },
  {
    id: "R",
    slug: "r-dhul-hijjah",
    title: "R. The days of Dhul - Hijjah",
    description: "Adhkar for the blessed days of Dhul-Hijjah.",
    duas: [
      { id: 105, topic: "On the Day of Arafah", arabic: "لا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", translation_en: "There is none worthy of worship except Allah, and He is alone, He has no partner, to Him belongs the supreme authority and praise and He is able to do all things", audioSrc: "/audio/chapter-r/105.mp3" },
      { id: 106, topic: "Easy Adhkār During the days of Dhul-Hijjah", arabic: "سُبْحَانَ اللهُ الْحَمْدُ لِلَّهِ ، لَا إِلَهَ إِلَّا اللَّهُ اللَّهُ أَكْبَر", translation_en: "I declare Allāh free of all imperfections. All Praise is for Allah None has the right to be worshipped except Allah Allah is greater than everything", audioSrc: "/audio/chapter-r/106.mp3" },
      { id: 107, topic: "Takbeer on the day of 'Eid", arabic: "الله أَكْبَرُ، الله أَكْبَرُ، اللهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللهُ، الله أَكْبَرُ، اللَّهُ أَكْبَرُ، وَلِلَّهِ الحَمْد", translation_en: "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest, there is no deity worthy of worship [in truth] except Allah, Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.", audioSrc: "/audio/chapter-r/107.mp3" }
    ]
  }
];