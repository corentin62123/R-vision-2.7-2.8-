const quizData = [
    // --- RESPIRATOIRE ---
    {
        topic: "respiratoire",
        question: "Quelle pathologie correspond à une obstruction réversible des voies aériennes inférieures ?",
        options: ["Bronchopneumopathie Chronique Obstructive (BPCO)", "Asthme", "Embolie pulmonaire", "Mucoviscidose"],
        correct: 1,
        explanation: "L'asthme est une maladie inflammatoire chronique des voies aériennes caractérisée par une obstruction bronchique **réversible** (spontanément ou sous traitement), contrairement à la BPCO où l'obstruction est peu ou pas réversible."
    },
    {
        topic: "respiratoire",
        question: "Quel est le principal facteur de risque favorisant la BPCO chez l'adulte ?",
        options: ["L'obésité sévère", "Le tabagisme", "L'allergie aux pollens", "La sédentarité"],
        correct: 1,
        explanation: "Le tabagisme (actif, ou parfois passif) est responsable de l'immense majorité des cas de BPCO, car la fumée détruit progressivement le tissu pulmonaire et obstrue les bronches."
    },
    {
        topic: "respiratoire",
        question: "Lors d'une crise d'asthme sévère, quel traitement d'urgence par voie inhalée est administré en priorité ?",
        options: ["Corticoïdes inhalés", "Bronchodilatateur Bêta-2 mimétique d'action courte (Salbutamol)", "Anticholinergique d'action prolongée", "Antibiotiques à large spectre"],
        correct: 1,
        explanation: "Le salbutamol (Ventoline) est le bronchodilatateur d'action rapide de référence pour lever le spasme bronchique en urgence."
    },
    {
        topic: "respiratoire",
        question: "Quel bruit respiratoire est caractéristique d'une crise d'asthme à l'auscultation ?",
        options: ["Crépitants", "Sibilants", "Frottements pleuraux", "Murmure vésiculaire aboli"],
        correct: 1,
        explanation: "Les sibilants sont des râles sifflants entendus principalement à l'expiration, traduisant le rétrécissement des petites bronches (bronchospasme)."
    },
    {
        topic: "respiratoire",
        question: "Parmi ces signes, lequel n'est pas un signe de gravité immédiate d'une crise d'asthme ?",
        options: ["Cyanose", "Difficulté à parler", "Toux sèche", "Troubles de la conscience"],
        correct: 2,
        explanation: "La toux sèche est un symptôme classique de l'asthme, mais la cyanose (manque d'O2), les mots saccadés (épuisement) et les troubles de la conscience sont des signes de détresse respiratoire aiguë menaçant le pronostic vital."
    },
    {
        topic: "respiratoire",
        question: "Comment se caractérise l'expectoration typique d'un patient atteint de mucoviscidose ?",
        options: ["Hémoptoïque (sanglante)", "Épaisse, visqueuse et purulente", "Fluide et transparente", "Mousseuse et rosée"],
        correct: 1,
        explanation: "La mucoviscidose est liée à une mutation génétique qui épaissit les sécrétions glandulaires. Dans les poumons, le mucus devient très visqueux et difficile à expectorer, favorisant les infections (d'où l'aspect purulent)."
    },
    {
        topic: "respiratoire",
        question: "Quel gaz du sang est typiquement perturbé au stade précoce d'une exacerbation de BPCO avec un effet de compensation ?",
        options: ["Hyperoxémie", "Hypocapnie", "Hypoxémie avec hypercapnie à long terme", "Alcalose métabolique primitive"],
        correct: 2,
        explanation: "Les patients BPCO chroniques ont souvent une hypoxémie (baisse de l'O2) associée à une hypercapnie (rétention de CO2). Leurs reins compensent cette acidose respiratoire en retenant les bicarbonates."
    },
    {
        topic: "respiratoire",
        question: "Que signifie le sigle VEMS mesuré lors d'une spirométrie ?",
        options: ["Volume Expiratoire Maximum Seconde", "Ventilation Expiratoire Moyenne Standard", "Volume Extra-Pulmonaire Maximum Sécrété", "Vitesse Expiratoire Maximale Syncopale"],
        correct: 0,
        explanation: "Le VEMS (Volume Expiratoire Maximum Seconde) mesure le volume d'air expulsé pendant la première seconde d'une expiration forcée. C'est l'indicateur principal pour évaluer le degré de l'obstruction bronchique."
    },
    {
        topic: "respiratoire",
        question: "Quel est le rôle primordial du kinésithérapeute respiratoire dans la prise en charge de la BPCO au long cours ?",
        options: ["Guérir l'inflammation alvéolaire", "Aider au désencombrement bronchique", "Dilater les alvéoles de façon permanente", "Prescrire la reprise du sport"],
        correct: 1,
        explanation: "L'éducation au désencombrement bronchique permet d'évacuer les sécrétions stagnantes, réduisant ainsi l'obstruction et le risque de surinfection."
    },
    {
        topic: "respiratoire",
        question: "Dans le cas d'un syndrome d'apnée obstructive du sommeil (SAOS), quel est le traitement de référence ?",
        options: ["Ventilation en pression positive continue (PPC)", "Oxygénothérapie à haut débit", "Aérosols de corticoïdes", "Antibiotiques continus"],
        correct: 0,
        explanation: "La machine à PPC (CPAP en anglais) maintient les voies aériennes ouvertes pendant l'inspiration et l'expiration nocturnes en envoyant de l'air sous pression, ce qui empêche les apnées."
    },

    // --- DIGESTIF ---
    {
        topic: "digestif",
        question: "Quel examen de première intention est privilégié pour diagnostiquer une lithiase biliaire symptomatique ?",
        options: ["Radiographie de l'abdomen (ASP)", "Scanner abdominal", "Échographie abdominale", "IRM biliaire"],
        correct: 2,
        explanation: "L'échographie abdominale est non invasive, non irradiante et extrêmement sensible pour détecter les calculs dans la vésicule biliaire, c'est l'examen gold-standard."
    },
    {
        topic: "digestif",
        question: "Quel groupe de signes cliniques caractérise impérativement un syndrome occlusif intestinal ?",
        options: ["Douleurs, diarrhée, fièvre, sueurs", "Douleurs, vomissements, arrêt des matières et des gaz, météorisme", "Constipation légère, brûlures gastriques, éructations", "Hématémèse, melæna, vertiges"],
        correct: 1,
        explanation: "La triade classique (ou tétrade) de l'occlusion : douleur abdominale, vomissements, arrêt du transit (matières ET GAZ), et météorisme (ballonnement)."
    },
    {
        topic: "digestif",
        question: "Quelle est la principale complication grave redoutée d'une lithiase vésiculaire bloquée dans la voie biliaire principale ?",
        options: ["Angiocholite aiguë", "Gastrite chronique", "Syndrome de l'intestin irritable", "RGO (Reflux Gastro-Œsophagien)"],
        correct: 0,
        explanation: "L'angiocholite est l'infection de la bile au-dessus de l'obstacle. C'est une urgence vitale caractérisée par la triade de Charcot : douleur, fièvre, ictère."
    },
    {
        topic: "digestif",
        question: "Comment nomme-t-on l'ablation chirurgicale de la vésicule biliaire ?",
        options: ["Cholécystectomie", "Colectomie totale", "Appendicectomie", "Gastrectomie"],
        correct: 0,
        explanation: "La cholécystectomie (souvent par cœlioscopie) est le traitement définitif de la lithiase vésiculaire symptomatique."
    },
    {
        topic: "digestif",
        question: "Face à une occlusion intestinale sur bride, quelle est souvent l'intervention infirmière prioritaire sur prescription ?",
        options: ["Pose d'une sonde urinaire à demeure", "Pose d'une sonde naso-gastrique en aspiration", "Administration de laxatifs osmotiques", "Alimentation entérale rapide"],
        correct: 1,
        explanation: "La pose d'une sonde naso-gastrique permet de vider l'estomac et l'intestin grêle de leurs sécrétions et des gaz, soulageant ainsi les vomissements et prévenant le risque d'inhalation."
    },

    // --- UROLOGIQUE ---
    {
        topic: "uro",
        question: "En cas de colique néphrétique aiguë, quelle est la recommandation hydrique thérapeutique immédiate ?",
        options: ["Hyperhydratation (> 3L/jour)", "Restriction hydrique tant que la douleur persiste", "Hydratation normale selon la soif", "Perfusion hypertonique en continu"],
        correct: 1,
        explanation: "Tant que la douleur pète, le rein est sous pression. Il faut limiter l'apport hydrique pendant la crise douloureuse aiguë pour ne pas augmenter la pression dans la voie excrétrice en amont du calcul."
    },
    {
        topic: "uro",
        question: "Quel est le traitement antalgique systémique de première intention prescrit lors d'une colique néphrétique simple ?",
        options: ["AINS (Anti-Inflammatoires Non Stéroïdiens)", "Paracétamol seul", "Morphine", "Antispasmodiques purs en monothérapie"],
        correct: 0,
        explanation: "Les AINS (Ketoprofène le plus souvent) sont très efficaces car ils agissent sur l'inflammation et diminuent le flux sanguin rénal, réduisant ainsi la pression intra-urétérale."
    },
    {
        topic: "uro",
        question: "Un patient présente un globe vésical très douloureux. Que faut-il suspecter en priorité anatomique ?",
        options: ["Une rétention aiguë d'urine (RAU)", "Une polyurie osmotique", "Une infection urinaire sans obstruction", "Une incontinence urinaire d'effort"],
        correct: 0,
        explanation: "La Rétention Aiguë d'Urine (RAU) est une impossibilité d'uriner malgré une vessie pleine. C'est une urgence douloureuse nécessitant un sondage urinaire (ou un cathéter sus-pubien)."
    },
    {
        topic: "uro",
        question: "Quelle est la cause la plus fréquente d'obstruction sous-vésicale entraînant une RAU chez l'homme âgé ?",
        options: ["Le cancer de la vessie", "L'hypertrophie bénigne de la prostate (HBP)", "La sténose de l'urètre post-infectieuse", "Un calcul vésical"],
        correct: 1,
        explanation: "L'adénome prostatique (ou HBP) grossit avec l'âge et vient comprimer l'urètre, gênant la vidange vésicale et pouvant mener à la rétention aiguë d'urine."
    },
    {
        topic: "uro",
        question: "Quelle complication rénale majeure peut survenir si un obstacle urétéral bilatéral n'est pas levé ?",
        options: ["Une insuffisance rénale post-rénale (obstructive)", "Une pyélonéphrite unilatérale", "Une nécrose tubulaire toxique", "Un syndrome néphrotique"],
        correct: 0,
        explanation: "L'obstruction complète détruit rapidement la fonction des reins par hyperpression, créant une insuffisance rénale aiguë dite 'obstructive' ou 'post-rénale'."
    },

    // --- CARDIO: MTEV, SCA, Insuffisance cardiaque ---
    {
        topic: "cardio",
        question: "Qu'est-ce que la Maladie Thrombo-Embolique Veineuse (MTEV) regroupe principalement ?",
        options: ["Infarctus du myocarde et AVC", "Thrombose Veineuse Profonde (TVP) et Embolie Pulmonaire (EP)", "Artérite des membres inférieurs et anévrisme", "Angine de poitrine et péricardite"],
        correct: 1,
        explanation: "La MTEV englobe la TVP (caillot dans une veine profonde, souvent la jambe) et sa complication redoutable, l'embolie pulmonaire (le caillot migre vers les artères pulmonaires)."
    },
    {
        topic: "cardio",
        question: "L'infarctus du myocarde (SCA ST+) est principalement causé par :",
        options: ["Une rupture de plaque d'athérome avec thrombose occlusive de l'artère coronaire", "Un spasme bronchique sévère", "Une infection bactérienne du muscle cardiaque", "Une hémorragie interne massive"],
        correct: 0,
        explanation: "L'infarctus survient lorsqu'une plaque de cholestérol se rompt dans une artère coronaire, formant un caillot (thrombus) qui bouche totalement l'artère, privant le cœur d'oxygène (ischémie)."
    },
    {
        topic: "cardio",
        question: "Quelle est la principale différence clinique entre l'angine de poitrine stable et l'infarctus du myocarde ?",
        options: ["L'angine de poitrine ne donne aucune douleur", "Dans l'angine, la douleur cède au repos ou à la trinitrine", "L'infarctus est curable par paracétamol", "L'angine de poitrine provoque toujours une perte de connaissance"],
        correct: 1,
        explanation: "La douleur de l'angor stable est souvent déclenchée par l'effort et disparaît au repos ou sous dérivé nitré en quelques minutes, car l'occlusion n'est que partielle et réversible. À l'inverse de l'infarctus."
    },
    {
        topic: "cardio",
        question: "Quels sont les signes cliniques classiques de l'insuffisance cardiaque gauche (liée à une stase en amont du cœur) ?",
        options: ["Œdèmes des membres inférieurs, hépatomégalie, turgescence jugulaire", "Dyspnée de décubitus, crépitants pulmonaires (OAP), toux nocturne", "Douleur thoracique irradiant dans le bras gauche", "Hémoptysie, fièvre fulgurante et cyanose"],
        correct: 1,
        explanation: "Le ventricule gauche n'arrive plus à pomper, donc le sang s'accumule en amont dans les poumons, causant dyspnée, toux, voire un sub-OAP au pire des cas."
    },
    {
        topic: "cardio",
        question: "Face à une suspicion d'OAP (Œdème Aigu du Poumon), quelle est la position d'attente à privilégier pour le patient ?",
        options: ["Allongé strictement à plat (décubitus dorsal)", "Position latérale de sécurité (PLS)", "Position assise, jambes pendantes si possible", "Trendelenburg (jambes surélevées)"],
        correct: 2,
        explanation: "La position assise permet de réduire le retour veineux au cœur (diminue la précharge) et améliore la mécanique ventilatoire, soulageant partiellement la détresse respiratoire."
    },

    // --- UE 2.7 : Endocrinologie ---
    {
        topic: "endocrino",
        question: "Quel est le mécanisme principal du diabète de type 1 ?",
        options: ["Une insulinorésistance des tissus périphériques", "Une destruction auto-immune des cellules bêta du pancréas", "Une surproduction de glucagon par le foie", "Un déficit en hormones thyroïdiennes"],
        correct: 1,
        explanation: "Le diabète de type 1 est une maladie auto-immune où les anticorps détruisent les cellules bêta des îlots de Langerhans du pancréas, conduisant à une carence totale en insuline."
    },
    {
        topic: "endocrino",
        question: "Parmi ces signes cliniques, lequel n'appartient pas au syndrome cardinal du diabète ?",
        options: ["Polyurie (urines abondantes)", "Polydipsie (soif intense)", "Prise de poids rapide", "Asthénie (fatigue extrême)"],
        correct: 2,
        explanation: "Le syndrome cardinal comprend : polyurie, polydipsie, amaigrissement (et non prise de poids, malgré la polyphagie) et asthénie. C'est le signe d'une carence sévère en insuline."
    },
    {
        topic: "endocrino",
        question: "Quels sont les signes cliniques urgents d'une hypoglycémie sévère ?",
        options: ["Fièvre, frissons, douleur abdominale", "Sueurs profuses, tremblements, pâleur, tachycardie", "Polydipsie, haleine de pomme, respiration ample", "Bradycardie extrême, cyanose, apnée"],
        correct: 1,
        explanation: "Face à une baisse brutale du sucre dans le sang, le corps libère de l'adrénaline, provoquant des sueurs froides, des tremblements, des palpitations et des pâleurs. Le resucrage immédiat est vital."
    },
    {
        topic: "endocrino",
        question: "Laquelle de ces complications est une complication microangiopathique chronique typique du diabète ?",
        options: ["L'Infarctus du myocarde", "L'Artérite des membres inférieurs (AOMI)", "L'Accident Vasculaire Cérébral (AVC)", "La Rétinopathie diabétique"],
        correct: 3,
        explanation: "La rétinopathie, la néphropathie et la neuropathie sont des complications microangiopathiques (atteinte des petits vaisseaux). L'infarctus ou l'AVC sont des complications macroangiopathiques."
    },
    {
        topic: "endocrino",
        question: "Quels sont les signes typiques de la Maladie de Basedow (Hyperthyroïdie) ?",
        options: ["Prise de poids, frilosité, bradycardie", "Tachycardie, amaigrissement, thermophobie, exophtalmie", "Crampes, tétanie, signe de Trousseau", "Myxœdème, voix rauque, constipation"],
        correct: 1,
        explanation: "La maladie de Basedow est causée par des auto-anticorps stimulant la thyroïde. Le métabolisme s'emballe : le patient a chaud, maigrit malgré un gros appétit, et son cœur bat très vite."
    },

    // --- UE 2.7 : Neurologie Dégénérative ---
    {
        topic: "neuro-deg",
        question: "Quelles sont les deux lésions histologiques typiques retrouvées dans le cerveau d'un patient atteint de la maladie d'Alzheimer ?",
        options: ["Plaques amyloïdes et dégénérescence neurofibrillaire", "Corps de Lewy et atrophie cérébelleuse", "Plaques de démyélinisation et gliose", "Micro-infarctus et lacunes ischémiques"],
        correct: 0,
        explanation: "La maladie d'Alzheimer se caractérise par l'accumulation extracellulaire de peptide bêta-amyloïde (plaques séniles) et l'accumulation intracellulaire de protéine Tau anormale (dégénérescence neurofibrillaire)."
    },
    {
        topic: "neuro-deg",
        question: "Quelle est la triade de symptômes moteurs caractéristiques de la Maladie de Parkinson ?",
        options: ["Hémiplégie, aphasie, hémianopsie", "Tremblement de repos, akinésie/bradykinésie, hypertonie plastique", "Paralysie flasque, amyotrophie, fasciculations", "Ataxie, nystagmus, dysarthrie"],
        correct: 1,
        explanation: "Le diagnostic clinique repose sur cette fameuse triade : un tremblement qui survient au repos, une lenteur des mouvements (akinésie), et une rigidité en 'tuyau de plomb'."
    },
    {
        topic: "neuro-deg",
        question: "Quel est le mécanisme physiopathologique de la Sclérose en Plaques (SEP) ?",
        options: ["Une hémorragie des enveloppes méningées", "Une dégénérescence des neurones moteurs de la corne antérieure", "Une inflammation et démyélinisation du système nerveux central", "Une ischémie transitoire d'une artère cérébrale"],
        correct: 2,
        explanation: "La SEP est une maladie inflammatoire auto-immune où les gaines de myéline qui protègent les axones dans le cerveau et la moelle épinière sont détruites."
    },
    {
        topic: "neuro-deg",
        question: "Quel est le traitement de première intention dans la maladie de Parkinson pour pallier le déficit en dopamine ?",
        options: ["Les corticoïdes à forte dose", "La Levodopa (L-Dopa) ou agonistes dopaminergiques", "Les anticholinestérasiques", "Les neuroleptiques typiques"],
        correct: 1,
        explanation: "La L-Dopa est un précurseur de la dopamine qui traverse la barrière hémato-encéphalique pour se transformer en dopamine dans le cerveau, compensant le déficit dû à la destruction des neurones dopaminergiques."
    },

    // --- UE 2.7 : Rhumatologie ---
    {
        topic: "rhumato",
        question: "Lequel de ces signes cliniques différencie typiquement l'arthrose d'une arthrite inflammatoire ?",
        options: ["La douleur d'arthrose est réveillée par le repos et calmée par l'effort", "La douleur d'arthrose est d'allure mécanique (aggravée par l'effort, calmée au repos)", "L'arthrose donne systématiquement de la fièvre", "L'arthrose ne touche jamais les genoux"],
        correct: 1,
        explanation: "La douleur mécanique (calmée par le repos, peu ou pas de dérouillage matinal) est typique de l'arthrose, liée à l'usure mécanique du cartilage."
    },
    {
        topic: "rhumato",
        question: "Qu'est-ce que l'ostéoporose au niveau histologique ?",
        options: ["Une infection bactérienne osseuse", "Une tumeur primaire de l'os", "Une raréfaction globale de la trame osseuse avec os devenu poreux", "Une inflammation chronique de la moelle épinière"],
        correct: 2,
        explanation: "Dans l'ostéoporose, la densité minérale osseuse diminue et l'architecture de l'os s'altère, le rendant fragile et particulièrement exposé aux fractures (poignet, col du fémur, vertèbres)."
    },
    {
        topic: "rhumato",
        question: "Pour quelle pathologie le 'dérouillage matinal prédominant (plus de 30 min)' est-il très caractéristique ?",
        options: ["L'arthrose de genou stricte", "La polyarthrite rhumatoïde (PR)", "L'ostéoporose post-ménopausique", "Une entorse de cheville"],
        correct: 1,
        explanation: "Les douleurs inflammatoires (qui réveillent la nuit et nécessitent un long dérouillage articulaire le matin) sont typiques des rhumatismes inflammatoires chroniques comme la PR."
    },

    // --- UE 2.7 : Ophtalmologie ---
    {
        topic: "ophtalmo",
        question: "De quelle pathologie l'opacification progressive du cristallin est-elle la cause ?",
        options: ["Le glaucome chronique", "La myopie", "La cataracte", "La DMLA"],
        correct: 2,
        explanation: "Le cristallin (la lentille de l'œil) s'opacifie avec l'âge (ou suite à un traumatisme ou diabète), ce qui provoque une baisse progressive de l'acuité visuelle et une photophobie."
    },
    {
        topic: "ophtalmo",
        question: "Quel mécanisme insidieux est à l'origine du glaucome chronique à angle ouvert ?",
        options: ["La destruction du nerf optique liée à une hypertonie intra-oculaire", "Le décollement brutal de la macro-rétine", "L'infection chronique de la conjonctive par des bactéries", "Un saignement soudain dans le corps vitré"],
        correct: 0,
        explanation: "L'humeur aqueuse est mal évacuée, la pression de l'œil monte et écrase progressivement les fibres du nerf optique. C'est asymptomatique pendant très longtemps jusqu'à rétrécir le champ visuel."
    },
    {
        topic: "ophtalmo",
        question: "Quel est le symptôme typique décrit par un patient atteint de DMLA (Dégénérescence Maculaire Liée à l'Âge) à un stade avancé ?",
        options: ["Une vision en tunnel (perte de vision périphérique)", "Un scotome central (tache noire au centre du champ visuel)", "Des éclairs lumineux persistants sur le côté (phosphènes)", "Une douleur oculaire foudroyante"],
        correct: 1,
        explanation: "La DMLA touche la macula (centre de la rétine). Le patient perd la vision centrale pour lire ou reconnaître des visages, mais conserve la vision périphérique."
    },

    // --- UE 2.7 : Insuffisance Rénale Chronique (IRC) ---
    {
        topic: "irc",
        question: "Quelle est la définition physiologique de l'Insuffisance Rénale Chronique ?",
        options: ["Une perte aiguë de la diurèse suite à une déshydratation", "Une diminution irréversible du nombre et de la fonction des néphrons", "Une inflammation ponctuelle suite à une pyélonéphrite", "Un blocage passager de l'urètre par un calcul"],
        correct: 1,
        explanation: "C'est une maladie silencieuse et irréversible qui détruit progressivement les néphrons (filtres du rein), entraînant une baisse du Débit de Filtration Glomérulaire (DFG)."
    },
    {
        topic: "irc",
        question: "Dans l'insuffisance rénale chronique sévère, quel trouble électrolytique représente un réel danger de mort subite ?",
        options: ["L'hyponatrémie", "L'hyperkaliémie", "L'hypocalcémie", "L'hypermagnésémie"],
        correct: 1,
        explanation: "Le rein ne parvient plus à excréter correctement le potassium (K+). S'il s'accumule dans le sang, l'hyperkaliémie entraîne une altération toxique de la conduction cardiaque pouvant aller jusqu'à l'arrêt de cœur."
    },
    {
        topic: "irc",
        question: "Dans l'insuffisance rénale chronique, quel est le risque majeur lié à la baisse de production d'érythropoïétine (EPO) par le rein ?",
        options: ["Une hyperkaliémie", "Une hypertension artérielle sévère", "Une anémie", "Une ostéodystrophie rénale"],
        correct: 2,
        explanation: "L'EPO stimule la production des globules rouges par la moelle osseuse. Lorsque le rein malade ne produit plus d'EPO, le patient développe une anémie, source de fatigue sévère."
    },

    // --- LECTURE ECG ---
    {
        topic: "ecg",
        question: "Sur un tracé ECG, que représente l'onde P ?",
        options: ["La dépolarisation (contraction) des oreillettes", "La repolarisation des ventricules", "La contraction des ventricules (QRS)", "Le temps de conduction auriculo-ventriculaire"],
        correct: 0,
        explanation: "L'onde P montre l'activation électrique des oreillettes. Le complexe QRS représente l'activation des ventricules, et l'onde T montre leur retour au repos (repolarisation)."
    },
    {
        topic: "ecg",
        question: "Quel signe électrique ECG évoque impérativement et en urgence un infarctus du myocarde transmural (SCA ST+) ?",
        options: ["Une bradycardie sinusale à 50 bpm", "Un sus-décalage du segment ST", "Une inversion de l'onde T", "Des extrasystoles isolées"],
        correct: 1,
        explanation: "Le sus-décalage du segment ST ('onde de Pardee') traduit une lésion ischémique aiguë sur toute l'épaisseur du myocarde due à une occlusion totale de l'artère."
    },
    {
        topic: "ecg",
        question: "Dans le cadre de l'urgence vitale, la fibrillation ventriculaire à l'ECG nécessite l'action immédiate suivante :",
        options: ["Injection de Diurétiques en IV", "Position demi-assise et attente du SAMU", "Choc électrique externe (Défibrillation) immédiat", "Injection d'adrénaline en sous-cutané"],
        correct: 2,
        explanation: "La fibrillation ventriculaire est un arrêt circulatoire (le cœur 'tremble' au lieu de pomper). Elle survient sur un tracé complètement anarchique et désorganisé : la seule issue est la défibrillation immédiate."
    },
    {
        topic: "ecg",
        question: "Comment se caractérise une tachycardie sinusale à l'ECG ?",
        options: ["Absence d'ondes P, rythme très irrégulier", "Rythme régulier, ondes P présentes suivies de QRS, fréquence > 100/min", "Complexes QRS très larges à 40/min", "Tremblement complet de la ligne de base"],
        correct: 1,
        explanation: "C'est le rythme normal du cœur (sinusal: l'onde P est au bon endroit) mais accéléré à plus de 100 battements normaux par minute (ex: effort musculaire, fièvre, stress)."
    },
    {
        topic: "ecg",
        question: "Dans la fibrillation atriale (FA), comment est la ligne de base entre les complexes QRS ?",
        options: ["Parfaitement plate (isoélectrique)", "Trémulante ou présentant des petites ondes 'f' irrégulières remplaçant l'onde P", "Présence d'ondes U géantes", "Régulière avec des blocs constants"],
        correct: 1,
        explanation: "La FA est une anarchie électrique dans les oreillettes. Il n'y a plus d'onde P normale mais une ligne qui frétille (ondes de fibrillation f), conduisant à des battements ventriculaires (les QRS) complètement irréguliers."
    }
];

const POINTS_PER_QUESTION = 100;
let currentQuestionIndex = 0;
let score = 0;
let currentQuizSet = [];

// DOM Elements
const landingSection = document.getElementById('landing-section');
const themesSection = document.getElementById('themes-section');
const quizSection = document.getElementById('quiz-section');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const progressBar = document.getElementById('progress-bar');
const scoreText = document.getElementById('score-text');
const scoreCircle = document.getElementById('score-indicator');
const questionCard = document.getElementById('question-card');
const resultCard = document.getElementById('result-card');
const finalScore = document.getElementById('final-score');
const feedbackMsg = document.getElementById('feedback-msg');
const restartBtn = document.getElementById('restart-btn');
const homeBtns = document.querySelectorAll('.home-btn');
const homeBtnHeader = document.getElementById('home-btn');
const resumeQuizBtn = document.getElementById('resume-quiz-btn');
const backToLandingBtn = document.getElementById('back-to-landing-btn');
const themesList28 = document.getElementById('themes-list-2-8');
const themesList27 = document.getElementById('themes-list-2-7');
const themesTitle = document.getElementById('themes-title');
const ueBtns = document.querySelectorAll('.ue-btn');

// Landing UE Buttons Event Listeners
ueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const ue = btn.getAttribute('data-ue');
        landingSection.classList.add('hidden');
        themesSection.classList.remove('hidden');
        
        themesList28.classList.add('hidden');
        themesList27.classList.add('hidden');
        
        if (ue === '2.8') {
            themesTitle.innerText = "UE 2.8 - Processus Obstructifs / Cardio";
            themesList28.classList.remove('hidden');
        } else if (ue === '2.7') {
            themesTitle.innerText = "UE 2.7 - Défaillances Organiques";
            themesList27.classList.remove('hidden');
        }
    });
});

backToLandingBtn.addEventListener('click', () => {
    themesSection.classList.add('hidden');
    landingSection.classList.remove('hidden');
});

// Home Buttons Event Listeners (Theme choices)
homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const topic = btn.getAttribute('data-topic');
        startQuizTopic(topic);
    });
});

function startQuizTopic(topic) {
    if (topic === 'all') {
        currentQuizSet = quizData.filter(q => ['respiratoire', 'digestif', 'uro', 'cardio', 'ecg'].includes(q.topic)); 
    } else if (topic === 'all-2-7') {
        currentQuizSet = quizData.filter(q => ['endocrino', 'neuro-deg', 'rhumato', 'ophtalmo', 'irc'].includes(q.topic));
    } else {
        currentQuizSet = quizData.filter(q => q.topic === topic);
    }
    
    // Mélange (aléatoire) de toutes les questions à chaque partie
    currentQuizSet.sort(() => Math.random() - 0.5);

    landingSection.classList.add('hidden');
    themesSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    homeBtnHeader.classList.remove('hidden');
    resumeQuizBtn.classList.add('hidden');
    
    score = 0;
    currentQuestionIndex = 0;
    scoreText.innerText = '0';
    progressBar.style.width = '0%';
    
    resultCard.classList.add('hidden');
    questionCard.classList.remove('hidden');
    document.querySelector('.progress-text').classList.remove('hidden');
    document.querySelector('.progress-container').classList.remove('hidden');

    initQuiz();
}

function initQuiz() {
    totalQSpan.innerText = currentQuizSet.length;
    loadQuestion();
    updateProgress();
}

function loadQuestion() {
    const currentQuiz = currentQuizSet[currentQuestionIndex];
    currentQSpan.innerText = currentQuestionIndex + 1;
    questionText.innerText = currentQuiz.question;
    
    optionsContainer.innerHTML = '';
    
    // Map options with their correctness and shuffle them
    const mappedOptions = currentQuiz.options.map((opt, i) => ({ text: opt, isCorrect: i === currentQuiz.correct }));
    mappedOptions.sort(() => Math.random() - 0.5);

    mappedOptions.forEach((optionData, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerText = optionData.text;
        
        if (optionData.isCorrect) {
            button.dataset.correct = "true";
        }
        
        button.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s backwards`;
        
        button.addEventListener('click', (e) => selectAnswer(optionData.isCorrect, button, e));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(isCorrect, buttonElement, event) {
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.style.pointerEvents = 'none');
    const explanationBox = document.getElementById('explanation-box');
    const explanationText = document.getElementById('explanation-text');
    const nextQuestionBtn = document.getElementById('next-question-btn');

    if (isCorrect) {
        buttonElement.classList.add('correct');
        addPoints(event);
        
        // Auto advance after correct answer
        setTimeout(() => {
            goToNextQuestion();
        }, 1200);
    } else {
        buttonElement.classList.add('incorrect');
        const correctBtn = Array.from(allButtons).find(btn => btn.dataset.correct === "true");
        if (correctBtn) correctBtn.classList.add('correct');
        
        // Show explanation box if incorrect
        explanationText.innerHTML = currentQuizSet[currentQuestionIndex].explanation;
        explanationBox.classList.remove('hidden');
        
        // Setup listener for next question button
        nextQuestionBtn.onclick = () => {
            explanationBox.classList.add('hidden');
            goToNextQuestion();
        };
    }
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizSet.length) {
        questionCard.style.opacity = '0';
        questionCard.style.transform = 'translateY(-15px)';
        
        setTimeout(() => {
            loadQuestion();
            updateProgress();
            questionCard.style.opacity = '1';
            questionCard.style.transform = 'translateY(0)';
        }, 350);

    } else {
        showResults();
    }
}

function addPoints(event) {
    const oldScore = score;
    score += POINTS_PER_QUESTION;
    
    let startTimestamp = null;
    const duration = 800;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        scoreText.innerHTML = Math.floor(progress * (score - oldScore) + oldScore);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);

    scoreCircle.classList.add('bump');
    setTimeout(() => scoreCircle.classList.remove('bump'), 400);

    const rect = event.target.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.classList.add('floating-points');
    floatEl.innerText = `+${POINTS_PER_QUESTION} XP`;
    
    floatEl.style.left = `${event.clientX}px`;
    floatEl.style.top = `${event.clientY - 30}px`;
    document.body.appendChild(floatEl);

    setTimeout(() => {
        floatEl.remove();
    }, 1000);
}

function updateProgress() {
    const progressPercent = (currentQuestionIndex / currentQuizSet.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function showResults() {
    questionCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    document.querySelector('.progress-text').classList.add('hidden');
    document.querySelector('.progress-container').classList.add('hidden');
    
    const maxScore = currentQuizSet.length * POINTS_PER_QUESTION;
    finalScore.innerText = `${score} / ${maxScore} XP`;    // Dynamic Feedback
    if (score === maxScore) {
        feedbackMsg.innerText = "Exceptionnel ! Vous maîtrisez parfaitement les processus obstructifs. Excellent pronostic pour le partiel ! 🌸✨";
    } else if (score >= maxScore * 0.6) {
        feedbackMsg.innerText = "Très bon travail ! Encore quelques révisions de détails et vous serez prêt(e) pour valider l'UE 2.8. 🎀";
    } else {
        feedbackMsg.innerText = "Ne vous découragez pas. Prenez le temps de revoir vos cours sur les pathologies obstructives (BPCO, lithiases, occlusions). Chaque erreur est une leçon ! 💖";
    }
}

restartBtn.addEventListener('click', () => {
    quizSection.classList.add('hidden');
    homeBtnHeader.classList.add('hidden');
    landingSection.classList.remove('hidden');
    resumeQuizBtn.classList.add('hidden');
});

// Home Button & Resume Logic
homeBtnHeader.addEventListener('click', () => {
    quizSection.classList.add('hidden');
    themesSection.classList.add('hidden');
    homeBtnHeader.classList.add('hidden');
    landingSection.classList.remove('hidden');
    
    // Si la question en cours n'est pas la première et qu'on n'a pas fini
    if (currentQuestionIndex > 0 && currentQuestionIndex < currentQuizSet.length) {
        resumeQuizBtn.classList.remove('hidden');
    }
});

resumeQuizBtn.addEventListener('click', () => {
    landingSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    homeBtnHeader.classList.remove('hidden');
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

// Check localStorage for theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.innerText = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerText = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerText = '🌙';
    }
});
