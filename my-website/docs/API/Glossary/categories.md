---
sidebar_position: 7
---

# Categories

List of all categories that can be found in Category Objects. Categories are organised by super-categories, each containing a number of sub-categories.

For instance, the super-category 'PERSON' contains categories like 'soldier', 'firstname', or even 'slavic_divinity' alongside many others !

The full list of categories is split between the verbs, nouns, adjectives, adverbs, prepositions and interjections.

## Category Object

This object can be found in NLU, parser_dependency, and synthesis.

| KEY       	| TYPE   	| DESCRIPTION                                                           	| CONSTRAINTS 	|
|-----------	|--------	|-----------------------------------------------------------------------	|-------------	|
| super     	| string 	| the super-category                                                    	| UPPER_CASE  	|
| sub       	| string 	| the sub-category                                                      	| lower_case  	|
| extra     	| string 	| extra information about the category                                  	| -           	|
| derivates 	| string 	| indicates that the category corresponds to another part of speech tag 	| see tags    	|
| intensity 	| float  	| intensity, mostly for adjectives and adverbs                          	|             	|

## Verb categories

| SUPER     	| SUB                  	| EXAMPLES                                               	|
|-----------	|----------------------	|--------------------------------------------------------	|
| ACTION    	| action_draw          	| esquisser, recrire, colorer, peindre                   	|
| ACTION    	| action_round         	| entourer, cerner, ceinturer, encercler                 	|
| ACTION    	| action_hurt          	| poignarder, blesser, defigurer, decapiter              	|
| ACTION    	| action_prevent       	| brider, empecher, exonerer, retenir                    	|
| ACTION    	| action_speak         	| begayer                                                	|
| ACTION    	| action_break         	| fouler, decouper, dissiper, eclater                    	|
| ACTION    	| action_add           	| accoler, rassembler, accroitre, engranger              	|
| ACTION    	| action_call          	| rappeler, prenommer, contacter, nommer                 	|
| ACTION    	| action_live          	| resider, exister, vivre, autoheberger                  	|
| ACTION    	| action_open          	| rouvrir                                                	|
| ACTION    	| action_fake          	| fausser, pretendre, simuler, sophistiquer              	|
| ACTION    	| action_kiss          	| becoter, baisoter, baiser, embrasser                   	|
| ACTION    	| action_play          	| divertir, badiner, blaguer, amuser                     	|
| ACTION    	| action_think         	| considerer, elaborer, penser, studier                  	|
| ACTION    	| action_bloom         	| eclore, bourgeonner, developper, epanouir              	|
| ACTION    	| action_get_fat       	| arrondir, epaissir, bouffir, alourdir                  	|
| ACTION    	| action_ask           	| interroger, intimer, mendier, solliciter               	|
| ACTION    	| action_sort          	| arranger, repartir, cataloguer, ordonner               	|
| ACTION    	| action_meet          	| frequenter, accoster, rencontrer, rejoindre            	|
| ACTION    	| action_move          	| gambader, migrer, voleter, gigoter                     	|
| ACTION    	| action_shoot         	| tirer, canarder                                        	|
| ACTION    	| action_kill          	| assommer, immoler, executer, lapider                   	|
| ACTION    	| action_turn          	| ronder, bifurquer, tourner, orbiter                    	|
| ACTION    	| action_hit           	| assommer, matraquer, choquer, jaber                    	|
| ACTION    	| action_take_care     	| flatter, dorloter, chouchouter, cajoler                	|
| ACTION    	| action_strike        	| heurter                                                	|
| ACTION    	| action_die           	| trepasser, succomber, crever, deceder                  	|
| ACTION    	| action_innovate      	| etrenner, lancer, innover, inventer                    	|
| ACTION    	| action_ban           	| oter, censurer, repudier, supprimer                    	|
| ACTION    	| action_suffer        	| peiner, souffrir, baver, subir                         	|
| ACTION    	| action_copy          	| mimer, couper-coller, singer                           	|
| ACTION    	| action_bring         	| emporter, rapporter, raccompagner, rapatrier           	|
| ACTION    	| action_fire          	| limoger                                                	|
| ACTION    	| action_hidden        	| cacher, envelopper, couvrir, ensevelir                 	|
| ACTION    	| action_can           	| pouvoir                                                	|
| ACTION    	| action_translate     	| traduire, transcrire, decrypter, transcoder            	|
| ACTION    	| action_warm          	| rechauffer                                             	|
| ACTION    	| action_search        	| visiter, examiner, scruter, chercher                   	|
| ACTION    	| action_plug          	| embrancher, connecter, brancher                        	|
| ACTION    	| action_cut           	| decouper                                               	|
| ACTION    	| action_destroy       	| briser, dechiqueter, abattre, fracasser                	|
| ACTION    	| action_read          	| bouquiner, feuilleter, relire, lire                    	|
| ACTION    	| action_miss          	| rater, louper, manquer                                 	|
| ACTION    	| action_keep          	| sauvegarder, garder                                    	|
| ACTION    	| action_damage        	| elimer, casser, infecter, scarifier                    	|
| ACTION    	| action_refine        	| epurer, ecremer, assainir, decoudre                    	|
| ACTION    	| action_sell          	| vendre, ecouler, revendre, retroceder                  	|
| ACTION    	| action_hate          	| maudire                                                	|
| ACTION    	| action_walk          	| balader, deambuler, vagabonder, pietiner               	|
| ACTION    	| action_try           	| tenter, intenter, attenter, oser                       	|
| ACTION    	| action_flow          	| couler, coulisser, glisser, mouvoir                    	|
| ACTION    	| action_learn         	| renseigner, enseigner, informer, reapprendre           	|
| ACTION    	| action_force         	| brusquer, precipiter, astreindre, imposer              	|
| ACTION    	| action_shine         	| flamboyer, luire, aveugler, eblouir                    	|
| ACTION    	| action_train         	| echauffer, courbaturer                                 	|
| ACTION    	| action_expel         	| expulser, eliminer, rejeter, refouler                  	|
| ACTION    	| action_end           	| resulter, cloturer, enteriner, finir                   	|
| ACTION    	| action_share         	| distribuer, partager, compartir, separer               	|
| ACTION    	| action_hire          	| employer, recruter, embaucher, embrigader              	|
| ACTION    	| action_heal          	| soulager, soigner, strapper, retablir                  	|
| ACTION    	| action_smash         	| heurter                                                	|
| ACTION    	| action_control       	| verifier, controler, superviser, patrouiller           	|
| ACTION    	| action_laugh         	| plaisanter, rire, egayer, divertir                     	|
| ACTION    	| action_light         	| eclairer, enflammer, embraser, incendier               	|
| ACTION    	| action_allow         	| autoriser, permissionner, permettre                    	|
| ACTION    	| action_attack        	| buter, taillader, defigurer, assaillir                 	|
| ACTION    	| action_decrease      	| abaisser, regresser, deprecier, rabaisser              	|
| ACTION    	| action_cross         	| croiser, transiter, entrecroiser                       	|
| ACTION    	| action_drive         	| vehiculer, acheminer, transporter, debrayer            	|
| ACTION    	| action_reward        	| primer, remunerer, recompenser, gratifier              	|
| ACTION    	| action_accept        	| valider, enteriner, approuver, comprendre              	|
| ACTION    	| action_have          	| reprendre, appartenir, detenir, beneficier             	|
| ACTION    	| action_starsh        	| amidonner                                              	|
| ACTION    	| action_relax         	| detendre, etendre, delasser, adoucir                   	|
| ACTION    	| action_detect        	| percevoir, apercevoir, detecter, devoiler              	|
| ACTION    	| action_ring          	| alerter, carillonner, claironner, sonnailler           	|
| ACTION    	| action_grow          	| grossir, grandir, cultiver, murir                      	|
| ACTION    	| action_describe      	| detailler, depeindre, decrire                          	|
| ACTION    	| action_mix           	| remixer, brouiller, emmeler, entrecroiser              	|
| ACTION    	| action_stop          	| barrer, suspendre, clore, barricader                   	|
| ACTION    	| action_create        	| naitre, recreer, fabriquer, improviser                 	|
| ACTION    	| action_throw         	| relancer, balancer, lancer, catapulter                 	|
| ACTION    	| action_stay          	| eterniser, resider, domicilier, loger                  	|
| ACTION    	| action_build         	| batir                                                  	|
| ACTION    	| action_get           	| beneficier, posseder, avoir, reprendre                 	|
| ACTION    	| action_cheer         	| stimuler, conforter, enhardir, encourager              	|
| ACTION    	| action_manufacture   	| mouler, emplatrer, teinter, sculpter                   	|
| ACTION    	| action_cover         	| etaler, recouvrir                                      	|
| ACTION    	| action_steal         	| carotter, piquer, escroquer, rafler                    	|
| ACTION    	| action_come          	| intervenir, arriver, reunir, rendre                    	|
| ACTION    	| action_name          	| surnommer, prenommer, denommer, mentionner             	|
| ACTION    	| action_select        	| preferer, elire, retenir, adopter                      	|
| ACTION    	| action_dress         	| rhabiller, boutonner, revetir, vetir                   	|
| ACTION    	| action_do_business   	| marchander, bazarder, brocanter, vendre                	|
| ACTION    	| action_teach         	| demontrer, instruire, inculquer, professer             	|
| ACTION    	| action_lie           	| fabuler, mentir, desinforme, affabuler                 	|
| ACTION    	| action_climb         	| gravir                                                 	|
| ACTION    	| action_buy           	| obtenir, acquerir, consommer, devaliser                	|
| ACTION    	| action_scare         	| intimider, effaroucher, epouvanter, violenter          	|
| ACTION    	| action_split         	| disloquer, quitter, divorcer, sectionner               	|
| ACTION    	| action_win           	| renverser, triompher, maitriser, vaincre               	|
| ACTION    	| action_touch         	| toucher, affleurer, piquer, palper                     	|
| ACTION    	| action_attract       	| plaire, racoler, importer, attirer                     	|
| ACTION    	| action_work          	| bricoler, operer, produire, travailler                 	|
| ACTION    	| action_turn_on       	| brancher                                               	|
| ACTION    	| action_develop       	| cultiver, pousser, developper, etendre                 	|
| ACTION    	| action_free          	| amnistier, acquitter, liberer                          	|
| ACTION    	| action_clean         	| restaurer, eponger, decaper, deterger                  	|
| ACTION    	| action_do            	| executer, perpetrer, oeuvrer, operer                   	|
| ACTION    	| action_dislike       	| indisposer, denigrer, importuner, repugner             	|
| ACTION    	| action_save          	| rememorer, defendre, emmagasiner, coffrer              	|
| ACTION    	| action_code          	| encoder, crypter, debuguer, webiser                    	|
| ACTION    	| action_like          	| complaire, plaire, acclamer, liker                     	|
| ACTION    	| action_support       	| sponsoriser                                            	|
| ACTION    	| action_understand    	| acquiescer, confirmer, agreer, approuver               	|
| ACTION    	| action_manipulate    	| pieger                                                 	|
| ACTION    	| action_need          	| necessiter, falloir, devoir                            	|
| ACTION    	| action_feed          	| ravitailler, engaver, alimenter, allaiter              	|
| ACTION    	| action_fool          	| parodier, arnaquer, baratiner, tricher                 	|
| ACTION    	| action_swim          	| baigner, crawler                                       	|
| ACTION    	| action_fear          	| paniquer, angoisser                                    	|
| ACTION    	| action_warn          	| signaler, avertir, prevenir, alerter                   	|
| ACTION    	| action_run           	| detaler, regaloper, cavaler, decaniller                	|
| ACTION    	| action_store         	| engranger, congeler, classer                           	|
| ACTION    	| action_disturb       	| encombrer, entraver, indisposer, titiller              	|
| ACTION    	| action_eat           	| ingerer, petit-dejeuner, bouffer, nourrir              	|
| ACTION    	| action_explain       	| depeindre, eclaircir, expliquer, epiloguer             	|
| ACTION    	| action_put           	| etaler, mettre, amener, placer                         	|
| ACTION    	| action_increase      	| croitre                                                	|
| ACTION    	| action_weaken        	| relacher, amenuiser, degrader, diminuer                	|
| ACTION    	| action_give          	| conferer, administrer, gater, verser                   	|
| ACTION    	| action_cheat         	| falsifier, truquer, filouter, truander                 	|
| ACTION    	| action_see           	| percevoir, visualiser, voir, visiter                   	|
| ACTION    	| action_say           	| indiquer, marcher, annoncer, chanter                   	|
| ACTION    	| action_punish        	| sanctionner, punir, sevir, verbaliser                  	|
| ACTION    	| action_help          	| reconforter, collaborer, aider, depanner               	|
| ACTION    	| action_know          	| connaitre, reconnaitre, savoir                         	|
| ACTION    	| action_spend         	| flamber, debourser, dilapider, payer                   	|
| ACTION    	| action_burn          	| enflammer, braiser, consumer, embraser                 	|
| ACTION    	| action_fight         	| embrouiller, batailler, assaillir, objecter            	|
| ACTION    	| action_show          	| paraitre, exhiber, exposer, apparaitre                 	|
| ACTION    	| action_feel          	| apprecier, notifier, discerner, ressentir              	|
| ACTION    	| action_lock          	| ecrouer, confiner, cadenasser, sequestrer              	|
| ACTION    	| action_invite        	| solliciter, recevoir, convier, inviter                 	|
| ACTION    	| action_plan          	| projeter, preparer, prevoir, premediter                	|
| ACTION    	| action_replicate     	| photocopier, repliquer, recopier, calquer              	|
| ACTION    	| action_cost          	| valoir, chiffrer, couter                               	|
| ACTION    	| action_upset         	| chahuter, bouleverser, affecter, emotionner            	|
| ACTION    	| action_cry           	| pleurer, chialer                                       	|
| ACTION    	| action_smell         	| sentir, embaumer                                       	|
| ACTION    	| action_catch         	| rattraper, attacher, capter, capturer                  	|
| ACTION    	| action_paste         	| couper-coller                                          	|
| ACTION    	| action_trust         	| fier                                                   	|
| ACTION    	| action_twist         	| tordre, demettre, fouler, deboiter                     	|
| ACTION    	| action_write         	| noter, inscrire, gribouiller, rediger                  	|
| ACTION    	| action_take          	| accaparer, emparer, prendre, rafler                    	|
| ACTION    	| action_let           	| autoriser, consentir, laisser, permettre               	|
| ACTION    	| action_slow          	| freiner, diminuer, ralentir                            	|
| ACTION    	| action_protest       	| debattre, affronter, tempeter, rebeller                	|
| ACTION    	| action_solve         	| traiter, resoudre, conclure, solutionner               	|
| ACTION    	| action_hold          	| brider, retenir, recuperer, avoir                      	|
| ACTION    	| action_push          	| broyer, pusher, desequilibrer, emboutir                	|
| ACTION    	| action_rely_on       	| dependre                                               	|
| ACTION    	| action_love          	| plaire                                                 	|
| ACTION    	| action_choose        	| arbitrer, correspondre                                 	|
| ACTION    	| action_protect       	| proteger, garantir, sauver, recueillir                 	|
| ACTION    	| action_remember      	| souvenir                                               	|
| ACTION    	| action_hear          	| assister, comprendre, assimiler, eveiller              	|
| ACTION    	| action_rain          	| pleuvoter, pleuvoir, pleuvioter, neiger                	|
| ACTION    	| action_hide          	| occulter, eclipser, deguiser, cacher                   	|
| ACTION    	| action_fix           	| recoudre, restaurer, guerir, repeindre                 	|
| ACTION    	| action_jump          	| sursauter, sauter                                      	|
| ACTION    	| action_locate        	| installer, positionner, situer, orienter               	|
| ACTION    	| action_start         	| recommencer, commencer, entamer, initialiser           	|
| ACTION    	| action_yell          	| galvaniser, gueuler, engueuler, rugir                  	|
| ACTION    	| action_disappoint    	| decevoir                                               	|
| ACTION    	| action_flee          	| enfuir, fuir, decamper, sauver                         	|
| ACTION    	| action_blame         	| blamer, medire, detracter, reprocher                   	|
| ACTION    	| action_cook          	| saupoudrer, zester, cuisiner, cuminer                  	|
| ACTION    	| action_close         	| occlure, refermer, fermer, reclore                     	|
| ACTION    	| action_divide        	| dissequer                                              	|
| ACTION    	| action_guess         	| depister, flairer, soupconner, pressentir              	|
| ACTION    	| action_happen        	| arriver, operer, survenir                              	|
| ACTION    	| action_stock         	| amasser, emmagasiner, entreposer, entasser             	|
| ACTION    	| action_delay         	| retarder, encombrer, embouteiller, reporter            	|
| ACTION    	| action_send          	| mandater, communiquer, expedier, transfuser            	|
| ACTION    	| action_forget        	| omettre, oublier                                       	|
| ACTION    	| action_broadcast     	| live-twitter, sous-mediatiser, diffuser, surmediatiser 	|
| ACTION    	| action_hurry         	| accelerer, depecher, brusquer, precipiter              	|
| ACTION    	| action_shake         	| gigoter, brouiller, agiter, convulser                  	|
| ACTION    	| action_fall          	| sombrer, ecrouler, affaisser, chuter                   	|
| ACTION    	| action_pull          	| attirer, soutirer, tirer, trainer                      	|
| ACTION    	| action_hug           	| resserrer, serrer, etreindre, enlacer                  	|
| ACTION    	| action_squeeze       	| presser, emmailloter, compresser, appuyer              	|
| ACTION    	| action_unlock        	| debloquer                                              	|
| ACTION    	| action_brag          	| frimer, coqueter, rengorger, exagerer                  	|
| ACTION    	| action_surprise      	| consterner, estomaquer, interloquer, surprendre        	|
| ACTION    	| action_link          	| amalgamer, allier, rassembler, synchroniser            	|
| ACTION    	| action_watch         	| surveiller, mater, zoomer, vigiler                     	|
| ACTION    	| action_entertain     	| divertir                                               	|
| ACTION    	| action_pee           	| pissouiller, pissoter, uriner, pisser                  	|
| ACTION    	| action_enjoy         	| delecter, jouir, beneficier, profiter                  	|
| ACTION    	| action_erase         	| effacer, supprimer, disparaitre, gommer                	|
| ACTION    	| action_sing          	| chanter, roucouler, fredonner, bercer                  	|
| ACTION    	| action_dream         	| fantasmer, extravaguer, planer, songer                 	|
| ACTION    	| action_change        	| devenir, rapetisser, remplacer, osciller               	|
| ACTION    	| action_dominate      	| vaincre, dominer, regir, assouvir                      	|
| ACTION    	| action_make          	| confectionner, accomplir, effectuer, produire          	|
| ACTION    	| action_rest          	| delasser, dormailler, sommeiller, remettre             	|
| ACTION    	| action_fly           	| planer                                                 	|
| ACTION    	| action_refuse        	| decliner                                               	|
| ACTION    	| action_exhaust       	| abattre, exceder, harceler, lasser                     	|
| ACTION    	| action_drink         	| siroter, bourrer, boire, pinter                        	|
| ACTION    	| action_manage        	| administrer, gerer, manier, reussir                    	|
| ACTION    	| action_get_angry     	| irriter, rager, horripiler, agacer                     	|
| ACTION    	| action_find          	| degoter, trouver, retrouver                            	|
| ACTION    	| action_lead          	| mener, dicter, chaperonner, commander                  	|
| ACTION    	| action_led           	| conceder                                               	|
| ACTION    	| action_hunt          	| dejucher, depister, braquer, traquer                   	|
| ACTION    	| action_pray          	| prier, agenouiller, communier, conjurer                	|
| ACTION    	| action_hope          	| desirer, escompter, presumer, aspirer                  	|
| ACTION    	| action_lose          	| abdiquer, perdre, egarer, louper                       	|
| ACTION    	| action_release       	| mourir, sacrifier, abandonner, lacher                  	|
| ACTION    	| action_joke          	| chambrer, amuser, plaisanter, charrier                 	|
| ACTION    	| action_sleep         	| rever, roupiller, sommeiller, coucher                  	|
| ACTION    	| action_wait          	| attarder, attendre, patienter, suspendre               	|
| ACTION    	| action_bore          	| poireauter, exceder, embeter, assommer                 	|
| ACTION    	| action_worry         	| tracasser, ronger, soucier, preoccuper                 	|
| ACTION    	| action_precede       	| auto-anterioriser, preluder, prefacer, preceder        	|
| ACTION    	| action_want          	| desirer, adorer, reclamer, convoiter                   	|
| ACTION    	| action_count         	| chiffrer, compter, recompter                           	|
| ACTION    	| action_talk          	| commenter, discourir, jacasser, renseigner             	|
| ACTION    	| action_undress       	| decouvrir, debotter, devetir, denuder                  	|
| ACTION    	| action_be            	| etre, revivre, redevenir, habiter                      	|
| SENTIMENT 	| sentiment_surprise   	| choquer, consterner, desarconner, interloquer          	|
| SENTIMENT 	| sentiment_disgust    	| rebuter, ecoeurer, indisposer, degouter                	|
| SENTIMENT 	| sentiment_protest    	| tempeter, revolter, pester, protester                  	|
| SENTIMENT 	| sentiment_worry      	| inquieter, troubler, soucier, tracasser                	|
| SENTIMENT 	| sentiment_enjoy      	| regaler, jubiler, delecter, deguster                   	|
| SENTIMENT 	| sentiment_bad        	| denigrer, critiquer, decrier, gueuler                  	|
| SENTIMENT 	| sentiment_disappoint 	| desenchanter, desoler, frustrer, desappointer          	|
| SENTIMENT 	| sentiment_suffer     	| eprouver, souffrir, patir, baver                       	|
| SENTIMENT 	| sentiment_hate       	| execrer, maudire, detester, vomir                      	|
| SENTIMENT 	| sentiment_laugh      	| plaisanter, divertir, blaguer, bidonner                	|
| SENTIMENT 	| sentiment_dislike    	| rebuter, offusquer, mecontenter, importuner            	|
| SENTIMENT 	| sentiment_joke       	| chambrer                                               	|
| SENTIMENT 	| sentiment_upset      	| bouleverser, affecter, ebranler                        	|
| SENTIMENT 	| sentiment_love       	| admirer, aimer, favoriser, raffoler                    	|
| SENTIMENT 	| sentiment_anger      	| rouspeter                                              	|
| SENTIMENT 	| sentiment_like       	| acclamer, apprecier, liker, complaire                  	|
| SENTIMENT 	| sentiment_attract    	| attirer, charmer, plaire                               	|
| SENTIMENT 	| sentiment_fear       	| paniquer, angoisser                                    	|
| SENTIMENT 	| sentiment_bore       	| embeter, ennuyer, assommer, accabler                   	|

## Noun categories

Each noun can have one or more categories in which it belongs. Categories are themselves grouped up in Super-categories. Code for language categories follows [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

| SUPER      	| SUB                        	| EXAMPLES                                                                                                                       	|
|------------	|----------------------------	|--------------------------------------------------------------------------------------------------------------------------------	|
| PERSON     	| informal_demonym           	| tico, zemmour, portos, vosgepatte                                                                                              	|
| PERSON     	| mayan_divinity             	| xmucane, serpent-vision, chac, monstre witz                                                                                    	|
| PERSON     	| profession_healthcare      	| oculiste, neurologiste, neurologue, oculariste                                                                                 	|
| PERSON     	| berber_divinity            	| dii mauri, anzar, agurzil, amon                                                                                                	|
| PERSON     	| super_hero                 	| captain america, wonderwoman, robin, spiderman                                                                                 	|
| PERSON     	| firstname                  	| maurad, alvino, tany, anousack                                                                                                 	|
| PERSON     	| tibetan_buddhist_divinity  	| maitreya, vajra varahi, kalarupa, vajrakilaya                                                                                  	|
| PERSON     	| greek_divinity             	| Érotes, athena, adonis, phorcys                                                                                                	|
| PERSON     	| ethnonym                   	| saint-jacquins, riceton, deodatiens, lichosienne                                                                               	|
| PERSON     	| polynesian_divinity        	| tinilau, tangaroa, pele, tama-nui-te-rā                                                                                        	|
| PERSON     	| voodoo_divinity            	| damballa, ayida wedo, ogun, grand bois                                                                                         	|
| PERSON     	| roman_divinity             	| anna perenna, morpheus, proserpine, bacchus                                                                                    	|
| PERSON     	| gladiator                  	| fortus, essedaire, samnite, andabate                                                                                           	|
| PERSON     	| athlete                    	| decathlonien, arbitre, funambule, kayakiste                                                                                    	|
| PERSON     	| profession_catering        	| barista, cafetier, serveur, saucier                                                                                            	|
| PERSON     	| collector                  	| cervalabelophile, chelonephile, fabophilie, ferrovipathe                                                                       	|
| PERSON     	| gallic_divinity            	| nantosuelte, damona, sucellos, vesunna                                                                                         	|
| PERSON     	| profession_criminal        	| narcotrafiquant, baron de la drogue, sequestreur, bootlegger                                                                   	|
| PERSON     	| musician                   	| vocalisateur, flutiste, basse, concertiste                                                                                     	|
| PERSON     	| hero                       	| belle au bois dormant, don quichotte, achille talon, dingo                                                                     	|
| PERSON     	| egyptian_divinity          	| singe-qefdenou, nekheb-kaou, taa, sept hathor                                                                                  	|
| PERSON     	| military_rank              	| caporal, lieutenant-general, lieutenante, sergent-chef                                                                         	|
| PERSON     	| chinese_divinity           	| zhong kui, manjushri, wenchangdijun, baoshengdadi                                                                              	|
| PERSON     	| profession_sales           	| teleacteur, commercial, gourlier, maroquinier                                                                                  	|
| PERSON     	| gender_identity            	| transsexuel, genre, merm, intersexuation                                                                                       	|
| PERSON     	| profession_science         	| parasitologiste, geobiologiste, semanticien, cryptographe                                                                      	|
| PERSON     	| incan_divinity             	| axomama, pachamama, mama ocllo, mama quilla                                                                                    	|
| PERSON     	| aztec_divinity             	| quetzalcoatl, xochipilli, tepeyollotl, huitzilopochtli                                                                         	|
| PERSON     	| irish_divinity             	| goibniu, oengus, lug, dana                                                                                                     	|
| PERSON     	| profession_education       	| pion, principal, conseiller principal de education, garde en milieu familial                                                   	|
| PERSON     	| mesopotamian_divinity      	| anunnaki, ninazu, pazuzu, tiamat                                                                                               	|
| PERSON     	| soldier                    	| franc-tireur, mp, samurai, kamikaze                                                                                            	|
| PERSON     	| family                     	| remps, reum, tata, maman                                                                                                       	|
| PERSON     	| nordic_divinity            	| mani, delling, skuld, yngvi                                                                                                    	|
| PERSON     	| hindu_divinity             	| yama, bhairavi, lingam, ganga                                                                                                  	|
| PERSON     	| faith                      	| carmelite, bonze, dalai lama, bulliste                                                                                         	|
| PERSON     	| japanese_divinity          	| zuijin, ohoyamatsumi, hārītī, hitorigami                                                                                       	|
| PERSON     	| lordship                   	| principat, woiwodie, archiduche, vicomte                                                                                       	|
| PERSON     	| profession                 	| pleban, massicotier, peintre, onomasiologue                                                                                    	|
| PERSON     	| profession_law             	| maton, assistant juridique, inspecteur general, grapignan                                                                      	|
| PERSON     	| informal_ethnonym          	| chinoir, bride, bamboula, pied-tendre                                                                                          	|
| PERSON     	| slavic_divinity            	| rod, vesna, rojanice, svarog                                                                                                   	|
| VEGETAL    	| fibre_plants               	| ramie, kapokier, cotonnier, sisal                                                                                              	|
| VEGETAL    	| lichen                     	| tamier, morelle faux jasmin, tamier commun, bignone orchidee                                                                   	|
| VEGETAL    	| fruit_tree                 	| arbre a pain, citronnier des quatre saisons, pruneautier, figuier domestique                                                   	|
| VEGETAL    	| vine                       	| oreille-d abbe, cotyledon, orpin, petite joubarbe                                                                              	|
| VEGETAL    	| medicinal_herb             	| pavot jaune, euphorbe maritime, soude brulee, obione faux-pourpier                                                             	|
| VEGETAL    	| succulent                  	| pteride, doradille du jura souabe, ceterach, fougere-aigle                                                                     	|
| VEGETAL    	| toxic_plant                	| cestreau nocturne, cigue de athenes, hepatique des jardins, ache                                                               	|
| VEGETAL    	| aromatic_plant             	| pilocere, cactus a raquette, oponce, cactus raquette                                                                           	|
| VEGETAL    	| alpine_plant               	| haricot de mer, nori, varech, fucus                                                                                            	|
| VEGETAL    	| plant_family               	| ambroisie, petite marguerite, centauree du solstice, raisin de amerique                                                        	|
| VEGETAL    	| flower                     	| lamiacees, lythracees, celastracees, convolvulacees                                                                            	|
| VEGETAL    	| conifers                   	| jussie a petites fleurs, ceratophylle inerme, cornifle submerge, viorne aquatique                                              	|
| VEGETAL    	| fern                       	| dahlia arborescent, ancolie, liseron des monts cantabriques, goutte-de-sang                                                    	|
| VEGETAL    	| oleaginous_plant           	| moss, polytrichum, mousse, sphaigne                                                                                            	|
| VEGETAL    	| creeper                    	| houblon, clematite brulante, vigne, rosier toujours vert                                                                       	|
| VEGETAL    	| invasive_plant             	| romarin, pouliot, farigoule, lavande male                                                                                      	|
| VEGETAL    	| cacti                      	| saksaoul, castanopside a feuilles dorees, pin, olivier sauvage                                                                 	|
| VEGETAL    	| waterside_plant            	| peltigere, orseille, usnee, cladonie                                                                                           	|
| VEGETAL    	| aquatic_plant              	| violette des haies, herbe aux chamois, orchis moucheron, nigritelle de rellikon                                                	|
| VEGETAL    	| poplar                     	| sapin de norvege, cedre du liban, cedre, genevrier cade                                                                        	|
| VEGETAL    	| grape_variety              	| negrette de toulouse, gouais, beclan, morillon                                                                                 	|
| VEGETAL    	| tree                       	| osier des vanniers, saule, verdiau, saule tortueux                                                                             	|
| VEGETAL    	| willow                     	| tremble, liard, peuplier blanc, peuplier commun                                                                                	|
| VEGETAL    	| ornamental_plant           	| pommier de carthage, bignone rose, sapin de norvege, hibiscus de chine                                                         	|
| VEGETAL    	| moss                       	| pensee des champs, souci sauvage, tormentille, garance                                                                         	|
| FOOD/DRINK 	| dough                      	| pate sablee, pate a choux, pate a chou, pate brisee                                                                            	|
| FOOD/DRINK 	| meat                       	| minerai de viande, magret, merguez, canard                                                                                     	|
| FOOD/DRINK 	| pizza                      	| reine, marinara, vegetarienne, stromboli                                                                                       	|
| FOOD/DRINK 	| drink                      	| scotch, rhum industriel, expresso, citronnelle                                                                                 	|
| FOOD/DRINK 	| edible_plant               	| figuier de barbarie, couscounille, cousteline, vesce craque                                                                    	|
| FOOD/DRINK 	| wine                       	| vin rose, clos-vougeot, montrachet, rouquin                                                                                    	|
| FOOD/DRINK 	| legume                     	| gramme vert, gesse pois chiche, astragale de montpellier, vesce commune                                                        	|
| FOOD/DRINK 	| vegetable                  	| artichaut de jerusalem, crosne, zucchini, radis noir                                                                           	|
| FOOD/DRINK 	| cheese                     	| caravane, livarot, munster, comte                                                                                              	|
| FOOD/DRINK 	| condiment                  	| olivete, noix de terre, cive, romarin                                                                                          	|
| FOOD/DRINK 	| cocktail                   	| kir royal, ti-punch, kir, mauresque                                                                                            	|
| FOOD/DRINK 	| confectionery              	| chamallow, whippet, confeito, grisette                                                                                         	|
| FOOD/DRINK 	| viennoiserie               	| pain au chocolat, couque au chocolat, petit pain au chocolat, petit pain                                                       	|
| FOOD/DRINK 	| spice                      	| vanille, clou de girofle, muscade, sansho                                                                                      	|
| FOOD/DRINK 	| seafood                    	| mollusque, modiole, moule bleue, cerithe                                                                                       	|
| FOOD/DRINK 	| potato                     	| pomme de terre de conservation, vitelotte, agata, pompadour                                                                    	|
| FOOD/DRINK 	| food_course                	| matza, taco, raclette, gnamacoudji                                                                                             	|
| FOOD/DRINK 	| cereal                     	| sesame, riz rond, avoine, seigle                                                                                               	|
| FOOD/DRINK 	| cake/dessert               	| palmier, gateau de fete, massepain, kouign-amann                                                                               	|
| FOOD/DRINK 	| citrus                     	| kalamansi, clemenvilla, lime, citron                                                                                           	|
| FOOD/DRINK 	| fruit                      	| cinelle, piridion, cheche, banane                                                                                              	|
| FOOD/DRINK 	| pasta                      	| macaroni, demi-lune, penne, croziflette                                                                                        	|
| FOOD/DRINK 	| mushroom                   	| argouane, truffe noire du perigord, charbonnier, fuliginees                                                                    	|
| ANIMAL     	| mustelid                   	| loutre de mer, carcajou, enhydre, loutre                                                                                       	|
| ANIMAL     	| marsupial                  	| myrmecobie a bandes, rat-kangourou du desert, tigre de tasmanie, sarigue de amerique du nord                                   	|
| ANIMAL     	| worm                       	| ascaridide, ver de fumier, gordius, escavene                                                                                   	|
| ANIMAL     	| spider                     	| mygale, araignee-crabe, babouk, latrodecte                                                                                     	|
| ANIMAL     	| imaginary_animal           	| qilin, cochon-garou, chante-clair, drac                                                                                        	|
| ANIMAL     	| seal                       	| otarie, ours marin, lion de mer, otarie a criniere                                                                             	|
| ANIMAL     	| equine                     	| takhi, paleotherium, anesse, ane sauvage                                                                                       	|
| ANIMAL     	| monkey                     	| singe de le ancien monde, singes verts de savane, gibbon de hainan, guenuche                                                   	|
| ANIMAL     	| chicken                    	| bourbonnaise, bresse, poule de pavilly, combattant indien                                                                      	|
| ANIMAL     	| ovine                      	| mouflon du canada, vassive, belier, ovin                                                                                       	|
| ANIMAL     	| snake                      	| bitis, acontias, taipan, crotale                                                                                               	|
| ANIMAL     	| antelope                   	| antilope-chevreuil, kob commun, oryx a cou roux, rhebuck                                                                       	|
| ANIMAL     	| elephantidae               	| elephant de afrique, elephantide, elephant de asie, stegodon                                                                   	|
| ANIMAL     	| insect                     	| pou du mouton, bombyx du murier, calosome, cheval du bon dieu                                                                  	|
| ANIMAL     	| cephalopod                 	| supion, seiche, teuthide, calmar colossal                                                                                      	|
| ANIMAL     	| mite                       	| aoutat, mite, ciron, trombidion                                                                                                	|
| ANIMAL     	| bird                       	| sturnide, grive drenne, tyran tritri, texan                                                                                    	|
| ANIMAL     	| pig                        	| blanc de le ouest, porc basque, grand porc rouge anglais, cochon nain                                                          	|
| ANIMAL     	| dinosaure                  	| panphagia protos, jaklapallisaurus, bagaceratops, bellusaurus sui                                                              	|
| ANIMAL     	| amphibian                  	| ambystome tigre, pelobate, grenouille de perez, salamandre noire                                                               	|
| ANIMAL     	| cornivore                  	| cochon de mer, chien-rat, civette africaine, civette                                                                           	|
| ANIMAL     	| mollusc                    	| minard, pinnier, petoncle, bec-de-jar                                                                                          	|
| ANIMAL     	| turtle                     	| tortue des marais, tortue, tortue a oreillons jaunes, courte-queue                                                             	|
| ANIMAL     	| squirrel                   	| ecureuil commun, ecureuil de eurasie, spermophile citille, polatouche                                                          	|
| ANIMAL     	| mammal                     	| herisson de algerie, musaraigne alpine, musaraigne des champs, musaraigne naine                                                	|
| ANIMAL     	| dog                        	| coban kopegi, braque francais, retriever du labrador, fila brasileiro                                                          	|
| ANIMAL     	| rhinoceros                 	| rhino, rhinoceron, rhinoceros de java, rhinoceros                                                                              	|
| ANIMAL     	| rodent                     	| cochon de inde, bobak de mongolie, souris domestique, rat brun sauvage                                                         	|
| ANIMAL     	| alternative_name_of_animal 	| clebs, chien, goel, cracou, minette                                                                                            	|
| ANIMAL     	| canid                      	| chacal a flancs rayes, lycaon, renard polaire, chacal a dos noir                                                               	|
| ANIMAL     	| cnidarian                  	| actinie verte, sertulaire, abrotanoide, anemone beignet                                                                        	|
| ANIMAL     	| cervidae                   	| cerf porte-musc, daim de perse, chevrillard, cerf rouge                                                                        	|
| ANIMAL     	| hippopotamus               	| hippopotame commun, hippopotame africain, hippopotame amphibie, hippopotame                                                    	|
| ANIMAL     	| rabbit                     	| hermine, havane francais, neo-zelandais, hollandais                                                                            	|
| ANIMAL     	| lizard                     	| seps tridactyle, trapele, basilic, rasiette                                                                                    	|
| ANIMAL     	| bat_animal                 	| rhinolophe vrai, fer a cheval, grand fer a cheval, minioptere                                                                  	|
| ANIMAL     	| animal_baby                	| hirondeau, aiglonne, pigeonneau, eterle                                                                                        	|
| ANIMAL     	| giraffidae                 	| girafon, girafeau, girafe, giraffe                                                                                             	|
| ANIMAL     	| bird_of_prey               	| autour des moluques, aigle a tete blanche, busard fluviatile, vautour fauve                                                    	|
| ANIMAL     	| feline                     	| tigrillon, chat de jungle, lynx pard, lionceau                                                                                 	|
| ANIMAL     	| crustacean                 	| squille, podocere, piade, chalime                                                                                              	|
| ANIMAL     	| unicellular_organism       	| globigerine, noctiluque, theileria, paramecie                                                                                  	|
| ANIMAL     	| cat                        	| chat, chantilly-tiffany, maine coon, golden shaded                                                                             	|
| ANIMAL     	| gastropod                  	| escargot turc, turritelle commune, patelle bleue, gros-gris                                                                    	|
| ANIMAL     	| lemur                      	| lepilemur, lemuriformes, maki catta, indri                                                                                     	|
| ANIMAL     	| camelid                    	| alpaga, chameaux, vaisseau du desert, paco                                                                                     	|
| ANIMAL     	| bovine                     	| andalouse grise, sheko, bufflone, bovin de limpurg                                                                             	|
| ANIMAL     	| ursidae                    	| ours polaire, ourson, ours brun, urside                                                                                        	|
| ANIMAL     	| parrot/budgie              	| lori arlequin, conure a tete de or, loriquet a tete bleue, toui de spix                                                        	|
| ANIMAL     	| mythological_creature      	| dragonneau, strige, sirene des eaux, leviathan                                                                                 	|
| ANIMAL     	| marine_mammal              	| dauphin, rorqual, baleine a bec commune, nordcaper                                                                             	|
| ANIMAL     	| fish                       	| serran commun, gorette, gouanie, daurade grise                                                                                 	|
| ANIMAL     	| butterfly                  	| ecaille pourpree, phalene ocellee, cidarie a bandes vertes, lichenee                                                           	|
| ANIMAL     	| porcin                     	| potamochere, sanglier geant, marcassin, quartanier                                                                             	|
| ANIMAL     	| goat                       	| pyrenees, golden guernsey, chevre des grisons a rayures, girgentana                                                            	|
| ANIMAL     	| sheep                      	| lincoln, corse, romanov, tarasconnaise                                                                                         	|
| ANIMAL     	| bivalve                    	| bucarde a papilles, anomie pelure-d’oignon, gallinette, clovisse doree                                                         	|
| ANIMAL     	| horse                      	| welsh, akal teke, cheval percheron, poney shetland                                                                             	|
| ANIMAL     	| crocodile                  	| alligator, deinosuchus, gavial, crocodile marin                                                                                	|
| ANIMAL     	| duck                       	| canard arlequin, harle huppe, sarcelle marbree, erismature                                                                     	|
| LANGUAGE   	| language_pa                	| espagnol, castillan, creole panameen, espagnol panameen                                                                        	|
| LANGUAGE   	| language_kz                	| russe, kazakh                                                                                                                  	|
| LANGUAGE   	| language_gh                	| Ève, asante, adangme, akyem                                                                                                    	|
| LANGUAGE   	| language_us                	| navajo, nomlaki, tubatulabal, gros-ventre                                                                                      	|
| LANGUAGE   	| language_ch                	| francais, italien, allemand, romanche                                                                                          	|
| LANGUAGE   	| language_ee                	| anglais, russe, ukrainien, estonien                                                                                            	|
| LANGUAGE   	| language_ve                	| espagnol                                                                                                                       	|
| LANGUAGE   	| language_st                	| portugais, principense, saotomense                                                                                             	|
| LANGUAGE   	| language_tj                	| tadjik, russe                                                                                                                  	|
| LANGUAGE   	| language_gm                	| anglais, wolof, peul, soninke                                                                                                  	|
| LANGUAGE   	| language_it                	| sassarais, mochene, venitien, triorasque                                                                                       	|
| LANGUAGE   	| synonym_of_language        	| langue de la passion, langue de eminescu, langue de shakespeare, langue de hemingway                                           	|
| LANGUAGE   	| language_ws                	| samoan, anglais                                                                                                                	|
| LANGUAGE   	| language_cl                	| espagnol, kunza, kawesqar, mapuche                                                                                             	|
| LANGUAGE   	| language_zw                	| tonga, ndau, nambya, xhosa                                                                                                     	|
| LANGUAGE   	| constructed_language       	| novlangue, zorglangue, kriollatino, syldave                                                                                    	|
| LANGUAGE   	| language_ru                	| bachkir, adygueen, tchouvache, evene                                                                                           	|
| LANGUAGE   	| language_sd                	| banda-ndele, nobiin, four, arabe                                                                                               	|
| LANGUAGE   	| language_my                	| malaisien, hakka, malais kedah, minnan                                                                                         	|
| LANGUAGE   	| language_va                	| italien, latin, francais                                                                                                       	|
| LANGUAGE   	| language_bo                	| takana, moseten, besiro, machineri                                                                                             	|
| LANGUAGE   	| language_zm                	| lozi, tonga, bemba, anglais                                                                                                    	|
| LANGUAGE   	| language_mg                	| malgache, francais                                                                                                             	|
| LANGUAGE   	| language_lk                	| cingalais, tamoul, anglais                                                                                                     	|
| LANGUAGE   	| language_cv                	| portugais                                                                                                                      	|
| LANGUAGE   	| language_tl                	| tetoum, portugais, makasai, mambai                                                                                             	|
| LANGUAGE   	| language_ma                	| tarifit, tachelhit, tamazight, darija                                                                                          	|
| LANGUAGE   	| language_ug                	| gungu, amba, bari, masaba                                                                                                      	|
| LANGUAGE   	| language_dk                	| danois                                                                                                                         	|
| LANGUAGE   	| language_af                	| moghol, domari, ouzbek                                                                                                         	|
| LANGUAGE   	| language_lt                	| lituanien, russe                                                                                                               	|
| LANGUAGE   	| language_no                	| finnois, kvene, same du sud, norvegien                                                                                         	|
| LANGUAGE   	| language_np                	| nepalais, maithili                                                                                                             	|
| LANGUAGE   	| language_na                	| ndonga, wambo, khoikhoi, nama                                                                                                  	|
| LANGUAGE   	| language_sr                	| surinamais, neerlandais                                                                                                        	|
| LANGUAGE   	| language                   	| kvene, akposso, yuracare, siraya                                                                                               	|
| LANGUAGE   	| language_bj                	| yoruba, guin, yorouba, bariba                                                                                                  	|
| LANGUAGE   	| language_sy                	| arabe, arabe levantin septentrional                                                                                            	|
| LANGUAGE   	| language_ye                	| arabe                                                                                                                          	|
| LANGUAGE   	| language_lb                	| arabe                                                                                                                          	|
| LANGUAGE   	| language_ne                	| tamasheq, songhai, kanouri, fulfulde                                                                                           	|
| LANGUAGE   	| language_sc                	| creole seychellois, l'anglais, francais                                                                                        	|
| LANGUAGE   	| language_ec                	| zaparo, quechua, espagnol, shuar                                                                                               	|
| LANGUAGE   	| language_in                	| telougou, gujarati, kashmiri, malayalam                                                                                        	|
| LANGUAGE   	| language_be                	| neerlandais, champenois, francais, gaumais                                                                                     	|
| LANGUAGE   	| language_gt                	| jacalteco, achi, chuj, quiche                                                                                                  	|
| LANGUAGE   	| language_lu                	| luxembourgeois, francais, allemand                                                                                             	|
| LANGUAGE   	| language_tv                	| anglais, tuvaluan                                                                                                              	|
| LANGUAGE   	| language_bz                	| espagnol, mopan, q’eqchi’, garifuna                                                                                            	|
| LANGUAGE   	| language_et                	| sidama, tigrinya, oromo, omali                                                                                                 	|
| LANGUAGE   	| language_br                	| wayampi, kinikinao, wanano, guana                                                                                              	|
| LANGUAGE   	| language_ke                	| swahili, luyia, gusii, luo                                                                                                     	|
| LANGUAGE   	| language_do                	| espagnol, creole haitien                                                                                                       	|
| LANGUAGE   	| language_cg                	| swahili, kikongo, francais, lingala                                                                                            	|
| LANGUAGE   	| language_ca                	| tlingit, slavey, heiltsuk, anglais                                                                                             	|
| LANGUAGE   	| language_qa                	| arabe                                                                                                                          	|
| LANGUAGE   	| language_fr                	| alsacien, chtis, catalan, corse                                                                                                	|
| LANGUAGE   	| language_tn                	| darija, francais, chelha, arabe                                                                                                	|
| LANGUAGE   	| language_mw                	| nyanja, tonga, nyakyusa, nkhonde                                                                                               	|
| LANGUAGE   	| language_ro                	| roumain                                                                                                                        	|
| LANGUAGE   	| language_so                	| somali, arabe, oromo, borana                                                                                                   	|
| LANGUAGE   	| language_nc                	| paici, nengone, drubea, iaai                                                                                                   	|
| LANGUAGE   	| dead_language              	| nomlaki, atsahuaca, gaulois, aka-bea                                                                                           	|
| LANGUAGE   	| language_cr                	| espagnol, mangue                                                                                                               	|
| LANGUAGE   	| language_ge                	| armenien, russe, azeri, georgien                                                                                               	|
| LANGUAGE   	| language_se                	| suedois                                                                                                                        	|
| LANGUAGE   	| language_co                	| piapoco, palenquero, quechua de napo, cumanagoto                                                                               	|
| LANGUAGE   	| language_bf                	| marka, peul, phuie, dioula                                                                                                     	|
| LANGUAGE   	| language_ar                	| nivacle, chana, quechua, toba                                                                                                  	|
| LANGUAGE   	| language_hn                	| pech, miskito, lenca, espagnol                                                                                                 	|
| LANGUAGE   	| language_ng                	| tiv, edo, igbo, yorouba                                                                                                        	|
| LANGUAGE   	| language_ua                	| russe, ukrainien                                                                                                               	|
| LANGUAGE   	| language_gq                	| yasa, bubi, kwasio, espagnol                                                                                                   	|
| LANGUAGE   	| language_th                	| lahu, iu mien, thai, khmer                                                                                                     	|
| LANGUAGE   	| language_pe                	| quechua, andoke, secoya, espagnol                                                                                              	|
| LANGUAGE   	| language_mm                	| mon, shan, rohingya, birman                                                                                                    	|
| LANGUAGE   	| language_gw                	| peul, balante, portugais, sarakole                                                                                             	|
| LANGUAGE   	| language_ly                	| nafusi, arabe, zouara                                                                                                          	|
| LANGUAGE   	| language_sl                	| anglais, loko, bom, kissi du nord                                                                                              	|
| LANGUAGE   	| language_au                	| anglais, uradhi, anguthimri, awabakal                                                                                          	|
| LANGUAGE   	| language_kg                	| russe, kirghize, ouzbek                                                                                                        	|
| LANGUAGE   	| language_md                	| roumain, bulgare, russe, ukrainien                                                                                             	|
| LANGUAGE   	| language_me                	| serbe, bosnien, montenegrin, croate                                                                                            	|
| LANGUAGE   	| language_za                	| venda, swazi, xhosa, zoulou                                                                                                    	|
| LANGUAGE   	| language_sg                	| tamil, malaisien, mandarin, malais                                                                                             	|
| LANGUAGE   	| language_nl                	| frysk, frison occidental, bas allemand, romani                                                                                 	|
| LANGUAGE   	| Langues morte              	| amanaye, vieux-nordique, vieil islandais, alsea                                                                                	|
| LANGUAGE   	| language_tg                	| mina, mobaa, kabiye, francais                                                                                                  	|
| LANGUAGE   	| language_ao                	| portugais                                                                                                                      	|
| LANGUAGE   	| language_de                	| allemand, haut allemand, sorabe, francique mosellan                                                                            	|
| LANGUAGE   	| language_py                	| espagnol, guarani                                                                                                              	|
| LANGUAGE   	| language_mo                	| portugais                                                                                                                      	|
| LANGUAGE   	| language_ml                	| foulfoulde, bambara, kassonke, maraka                                                                                          	|
| LANGUAGE   	| language_nr                	| nauruan, anglais                                                                                                               	|
| LANGUAGE   	| language_eh                	| chleuh, darija, arabe, hassanya                                                                                                	|
| LANGUAGE   	| language_fi                	| finnois, suedois, same du nord, carelien                                                                                       	|
| LANGUAGE   	| language_sk                	| hongrois, slovaque                                                                                                             	|
| LANGUAGE   	| language_es                	| occitan, catalan, espagnol, galicien                                                                                           	|
| LANGUAGE   	| language_rw                	| swahili, francais, anglais, kinyarwanda                                                                                        	|
| LANGUAGE   	| language_pt                	| portugais                                                                                                                      	|
| LANGUAGE   	| language_gn                	| toma, soussou, malinke, guerze                                                                                                 	|
| LANGUAGE   	| language_ph                	| surigaonon, tagalog-filipino, tausug, waray-waray                                                                              	|
| LANGUAGE   	| language_om                	| anglais, arabe, omanais                                                                                                        	|
| LANGUAGE   	| language_pg                	| anglais, tok pisin, hiri motou                                                                                                 	|
| LANGUAGE   	| language_hr                	| croate, hongrois                                                                                                               	|
| LANGUAGE   	| language_lv                	| russe, letton                                                                                                                  	|
| LANGUAGE   	| language_al                	| albanais                                                                                                                       	|
| LANGUAGE   	| language_by                	| ukrainien, bielorusse                                                                                                          	|
| LANGUAGE   	| language_sn                	| peul, wolof, bambara, saafi                                                                                                    	|
| LANGUAGE   	| language_la                	| lao                                                                                                                            	|
| LANGUAGE   	| language_gb                	| anglais                                                                                                                        	|
| LANGUAGE   	| language_mr                	| imraguen, wolof, malinke de le ouest, arabe                                                                                    	|
| LANGUAGE   	| language_hu                	| hongrois                                                                                                                       	|
| LANGUAGE   	| language_gf                	| palikur, mataray, kali'na, wayampi                                                                                             	|
| LANGUAGE   	| language_bi                	| kirundi, kiswahili                                                                                                             	|
| LANGUAGE   	| language_mz                	| portugais, swati, chopi, nyungwe                                                                                               	|
| LANGUAGE   	| language_ba                	| croate                                                                                                                         	|
| LANGUAGE   	| language_cz                	| tcheque                                                                                                                        	|
| LANGUAGE   	| language_tw                	| taiwanais, holo, hoklo, hakka                                                                                                  	|
| LANGUAGE   	| language_tm                	| turkmene, russe                                                                                                                	|
| LANGUAGE   	| language_pr                	| espagnol                                                                                                                       	|
| LANGUAGE   	| language_vn                	| bouyei, laha, viet, tay                                                                                                        	|
| LANGUAGE   	| language_ls                	| swati, anglais, zoulou, sotho                                                                                                  	|
| LANGUAGE   	| language_uz                	| ouzbek, tadjik, russe, tadjike                                                                                                 	|
| LANGUAGE   	| language_mx                	| otomi de queretaro, jacalteque, zapoteque, huaxteque                                                                           	|
| LANGUAGE   	| language_id                	| manggarai, bima, sasak, aceh                                                                                                   	|
| LANGUAGE   	| language_ci                	| dioula, malinke, abron, agni                                                                                                   	|
| LANGUAGE   	| language_nz                	| maori, anglais                                                                                                                 	|
| LANGUAGE   	| language_tr                	| azeri, zazaki, turc, arabe                                                                                                     	|
| LANGUAGE   	| language_mn                	| bouriate, mongol khalkha, mongol, oirate                                                                                       	|
| LANGUAGE   	| language_tt                	| creole, anglais                                                                                                                	|
| LANGUAGE   	| language_jp                	| japonais, ainou, okinawaien                                                                                                    	|
| LANGUAGE   	| language_ss                	| toposa, anglais, nuer-dinka, arabe                                                                                             	|
| LANGUAGE   	| language_az                	| boudoukh, budukh, rutul                                                                                                        	|
| LANGUAGE   	| language_ga                	| bubi, francais, baka, duma                                                                                                     	|
| LANGUAGE   	| language_kr                	| coreen                                                                                                                         	|
| LANGUAGE   	| language_fm                	| mwoakiloa, carolinien, paafang, mokil                                                                                          	|
| LANGUAGE   	| language_tk                	| tokelau, anglais, tokelauan                                                                                                    	|
| LANGUAGE   	| language_lr                	| bassa, gola, mano, vai                                                                                                         	|
| LANGUAGE   	| language_vu                	| bichelamar, tanna du nord, aoba, paama                                                                                         	|
| LANGUAGE   	| language_at                	| allemand, walser, hongrois, slovene                                                                                            	|
| LANGUAGE   	| language_pl                	| polonais                                                                                                                       	|
| LANGUAGE   	| language_pk                	| anglais, pachto, pendjabi, ourdou                                                                                              	|
| LANGUAGE   	| language_eg                	| domari, siwi, arabe saʿidi, arabe egyptien                                                                                     	|
| LANGUAGE   	| language_cn                	| zhuang de yongnan, zhuang de guibei, zhuang de yongbei, chinois                                                                	|
| LANGUAGE   	| language_sz                	| anglais, swati                                                                                                                 	|
| LANGUAGE   	| language_nu                	| vagahau niue, tafiti, niueen, motu                                                                                             	|
| LANGUAGE   	| language_tz                	| anglais, sukuma, kiswahili, gogo                                                                                               	|
| LANGUAGE   	| language_rs                	| serbe                                                                                                                          	|
| LANGUAGE   	| language_ni                	| espagnol                                                                                                                       	|
| LANGUAGE   	| language_kp                	| coreen                                                                                                                         	|
| LANGUAGE   	| language_cm                	| makari, francais, ewondo, awing                                                                                                	|
| LANGUAGE   	| language_er                	| tigrigna, tigre, bilen, bedja                                                                                                  	|
| OBJECT     	| music_instrument           	| mirliton, akonting, autoharpe, pianocktail                                                                                     	|
| OBJECT     	| underwear                  	| string, dampmart, camisole, corset                                                                                             	|
| OBJECT     	| hat                        	| kokochnik, chapel, kebour, mirliton                                                                                            	|
| OBJECT     	| machine                    	| essuyeur, decapeuse, radio, scanner                                                                                            	|
| OBJECT     	| medicine                   	| nematicide, p-acetylaminophenol, medicament, ivermectine                                                                       	|
| OBJECT     	| clothing                   	| manche de lustrine, surcot, pantalon a pont, dhoti                                                                             	|
| OBJECT     	| shoes                      	| talon aiguille, charentaise, cuissarde, richelieu                                                                              	|
| OBJECT     	| measuring_instrument       	| decimetre, secohmmetre, ophtalmometre, palmer                                                                                  	|
| OBJECT     	| tool                       	| tronconneuse, cle lavabo, drill, poincon                                                                                       	|
| OBJECT     	| kitchenware                	| ramequin, cuillere en bois, cuillere a sauce, casse-noix                                                                       	|
| OBJECT     	| appliance                  	| congelateur, nettoyeur a vapeur, lave-linge, singer                                                                            	|
| OBJECT     	| armor                      	| soleret, armet, kabuto, ocrea                                                                                                  	|
| OBJECT     	| firearm                    	| falo, fusil-mitrailleur, mortier, escopette                                                                                    	|
| OBJECT     	| furniture                  	| table a langer, banquette, ambon, fauteuil                                                                                     	|
| OBJECT     	| bladed_weapon              	| latte, couteau suisse, douk-douk, ninjato                                                                                      	|
| TIME       	| time_lapse                 	| bisannuel, annuel, seculaire, mensuel                                                                                          	|
| TIME       	| month                      	| juill., aout, 9bre, xbre                                                                                                       	|
| TIME       	| timespace                  	| aujourd'hui, veille, matin, soir                                                                                               	|
| TIME       	| weekday                    	| lun., lundi, mar., mercredi                                                                                                    	|
| TIME       	| season                     	| saison humide, hiver, printemps, ete                                                                                           	|
| VEHICULE   	| boat                       	| galvette, pirogue, foncet, hors-bord                                                                                           	|
| VEHICULE   	| vehicule                   	| vehicule spatial, hydravion, ratrak, tandem                                                                                    	|
| VEHICULE   	| car                        	| mazda, berline, quatre-chevaux, taxi                                                                                           	|
| VEHICULE   	| aircraft                   	| adav, sesquiplan, b-52, ulm                                                                                                    	|
| LOCATION   	| country                    	| norfolk, sint maarten, fidji, belize                                                                                           	|
| LOCATION   	| state_mexico               	| yucatan, morelos, guanajuato, basse-californie                                                                                 	|
| LOCATION   	| state_brazil               	| mato grosso do sul, tocantins, bahia, minas gerais                                                                             	|
| LOCATION   	| state_south_sudan          	| jonglei, unite, equatoria-oriental, equatoria-occidental                                                                       	|
| LOCATION   	| cardinal_point             	| ouest-quart-sud-ouest, sud-sud-ouest-demi-sud, sud-ouest demi-ouest, sud demi-ouest                                            	|
| LOCATION   	| religious_building         	| collegiale, stupa, oratoire, tumulus                                                                                           	|
| LOCATION   	| building_restauration      	| glacier, resto-brasserie, camion pizza, pub-restaurant                                                                         	|
| LOCATION   	| shop                       	| salon de coiffure, boite de nuit, pharmacie, tele-boutique                                                                     	|
| LOCATION   	| factory                    	| cimenterie, ferronnerie, usine, limonaderie                                                                                    	|
| LOCATION   	| state_australia            	| australie-meridionale, queensland, tasmanie, australie-occidentale                                                             	|
| LOCATION   	| city                       	| cogna, bainville-aux-saules, tlokweng, saint-francois-de-sales                                                                 	|
| LOCATION   	| room                       	| cuisine, balcons, grenier, cave                                                                                                	|
| LOCATION   	| volcano                    	| grimsvotn, piton de la fournaise, grimsvoetn, etna                                                                             	|
| LOCATION   	| planet                     	| pegaside, epimethee, jupiter chaud, galatee                                                                                    	|
| LOCATION   	| state_sudan                	| darfour-central, al djazirah, sannar, khartoum                                                                                 	|
| LOCATION   	| mountain                   	| mont aigoual, cantabriques, monts des geants, charmant som                                                                     	|
| LOCATION   	| continent                  	| ancien monde, amerique du nord, hindoustan, oceanie                                                                            	|
| LOCATION   	| administrative_district    	| etat, wilaya, comitat, subdivision                                                                                             	|
| LOCATION   	| alternative_country_name   	| pays des kangourous, pays du fromage, pays du cedre, pays des aigles                                                           	|
| LOCATION   	| strait                     	| detroit de sele, detroit de balabac, bosphore, detroit de cook                                                                 	|
| LOCATION   	| sub-prefecture             	| sedan, charolles, chateau-chinon ( ville ), cherbourg-octeville                                                                	|
| LOCATION   	| peninsula                  	| alaska, crimee, floride, black isle                                                                                            	|
| LOCATION   	| ocean                      	| mer des indes, atlantique sud, ocean atlantique nord, ocean arctique                                                           	|
| LOCATION   	| sea                        	| mer ionienne, mer de azov, mediterranee asiatique, mediterranee americaine                                                     	|
| LOCATION   	| dessert                    	| aralkum, atacama, kyzylkoum, desert du cholistan                                                                               	|
| LOCATION   	| golf/bay                   	| golfe persique, golfe de biafra, baie de fundy, golfe de bohai                                                                 	|
| LOCATION   	| prefecture                 	| quimper, besancon, lille, troyes                                                                                               	|
| LOCATION   	| building                   	| hospice, kiosque, prison, tombe                                                                                                	|
| LOCATION   	| state_india                	| chattisgarh, mizoram, rajasthan, karnataka                                                                                     	|
| LOCATION   	| state_burma                	| rakhine, kayin, mon, shan                                                                                                      	|
| LOCATION   	| river                      	| ijssel, belles-dames, mobile, lwalaba                                                                                          	|
| LOCATION   	| lake                       	| amqui, buscaylet, euripe, lac caspien                                                                                          	|
| LOCATION   	| state_usa                  	| delaware, maine, caroline du nord, colorado                                                                                    	|
| OTHER      	| molluscicide               	| mercaptodimethur, metaldehyde, methiocarbe, methomyl                                                                           	|
| OTHER      	| alkaloid                   	| anagyrine, aniline, arborescidine, atropine                                                                                    	|
| OTHER      	| metal                      	| metal, actinium, alu, aluminium                                                                                                	|
| OTHER      	| fungicide                  	| 8-hydroxyquinoleine, acibenzolar-s-methyle, acide ascorbique, ammonium quaternaire                                             	|
| OTHER      	| science                    	| actinologie, aeraulique, aeropalynologie, agnotologie                                                                          	|
| OTHER      	| pesticide                  	| acaricide, corvifuge, fongicide, herbicide                                                                                     	|
| OTHER      	| musical_genre              	| acid jazz, bel canto, blackdoom, black metal                                                                                   	|
| OTHER      	| news                       	| actualite, fait divers                                                                                                         	|
| OTHER      	| game                       	| action ou verite, airsoft, babyfoot, baguenaudier                                                                              	|
| OTHER      	| document                   	| reglement, reglement de copropriete, reglement interieur, reporting                                                            	|
| OTHER      	| nematicide                 	| 1,2-dichloropropane, 1,3-dichloropropene, abamectin, aldicarbe                                                                 	|
| OTHER      	| peculiar_informal_demonym  	| americain, arabe du coin, armee mexicaine, auberge espagnole                                                                   	|
| OTHER      	| rodenticide                	| aceto-arsenite de cuivre, alpha naphtyl indane dione, alphachloralose, ancymidole                                              	|
| OTHER      	| mineral                    	| aakerite, aarite, abkhazite, abrazite                                                                                          	|
| OTHER      	| currency                   	| cent, centime, centime d’euro, eurocent                                                                                        	|
| OTHER      	| insecticide                	| phosphure d’aluminium, phosphure de magnesium, phoxime, pirimicarbe                                                            	|
| OTHER      	| respect                    	| affection, civilite, estime, tolerance                                                                                         	|
| OTHER      	| ordinal                    	| 1er, 10e, 100e, 1000e                                                                                                          	|
| OTHER      	| orphan_disease             	| maladie orpheline, coxa-retrorsa, coxa vara, epiphysiolyse des adolescents                                                     	|
| OTHER      	| horse_color                	| alezan, aquilain, arzel, aubere                                                                                                	|
| OTHER      	| acaricide                  	| abamectin, acrinathrine, amitraze, avermectin b1a                                                                              	|
| OTHER      	| card_game                  	| 8 americain, aluette, ascenseur, baccara                                                                                       	|
| OTHER      	| illness/virus              	| virus, adenovirus, arbovirus, coronavirus                                                                                      	|
| OTHER      	| network_protocol           	| adsl, anneau a jeton, arp, ascii                                                                                               	|
| OTHER      	| combat_sport               	| sport de combat, boxe, boxe anglaise, escrime                                                                                  	|
| OTHER      	| fear                       	| peur, anxiete, couardise, trouble                                                                                              	|
| OTHER      	| chemical_substance         	| acetal, acetate, 4-acetylaminophenol, p-acetylaminophenol                                                                      	|
| OTHER      	| collection                 	| abecedephilie, absinthiophilie, aerophilatelie, akkordiophilie                                                                 	|
| OTHER      	| phobic                     	| acoustophobe, aerodromphobe, aerophobe, agoraphobe                                                                             	|
| OTHER      	| human_body_muscle          	| abdominal, abdominaux, abducteur, adducteur                                                                                    	|
| OTHER      	| plant_growth               	| acide 2,4-dichlorophenoxyacetique, acide 4-chloro-phenoxyacetique, acide alpha naphtylacetique, acide chloro-4-phenoxyacetique 	|
| OTHER      	| animal_sound               	| zinzibulement, zinzibuler, zinzinulement, zinzinuler                                                                           	|
| OTHER      	| disgust                    	| degout, amertume, depit, repugnance                                                                                            	|
| OTHER      	| hominid                    	| australopitheque, denisovien, etre humain, gigantopitheque                                                                     	|
| OTHER      	| anatomy                    	| tete, visage, front, oreille                                                                                                   	|
| OTHER      	| chemical_element           	| unhexunium, unnilbium, unnilennium, unnilhexium                                                                                	|
| OTHER      	| herbicide                  	| metobromuron, metolachlor, metolachlore, metoprotryne                                                                          	|
| OTHER      	| skin_illness               	| acne, couperose, eczema, erytheme                                                                                              	|
| OTHER      	| electrical_component       	| allume-cigare, ballast, biorupteur, bobine                                                                                     	|
| OTHER      	| phobia                     	| lalophobie, lathophobie, lesbophobie, leukophobie                                                                              	|
| OTHER      	| feeling                    	| affection, emotion, sentiment, passion                                                                                         	|
| OTHER      	| crime_or_misdeameanor      	| abus de biens sociaux, abus de confiance, abus de faiblesse, arnaque                                                           	|
| OTHER      	| psychiatric_illness        	| demonomanie, demonopathie, paranoia, schizophrenie                                                                             	|
| OTHER      	| company                    	| airbus, google, intel, apple                                                                                                   	|
| OTHER      	| mail                       	| courrier, messagerie, missive, expedition                                                                                      	|
| OTHER      	| happiness                  	| bonheur, felicite, paix, ravissement                                                                                           	|
| OTHER      	| setellite                  	| s/2000 j 10, s/2000 j 2, s/2000 j 3, s/2000 j 4                                                                                	|
| OTHER      	| electronic_component       	| composant electronique, bigrille, bobine, chipset                                                                              	|
| OTHER      	| misfortune                 	| malheur, desastre, chagrin, fleau                                                                                              	|
| OTHER      	| illness                    	| tuberculose, tularemie, tumeur, tumeur melanique                                                                               	|
| OTHER      	| trouble_language           	| alalie, alogie, anarthrie, aphasie                                                                                             	|
| OTHER      	| rock                       	| ardoise, ardoisine, arenite, arkose                                                                                            	|
| OTHER      	| maritime_route             	| canal, chenal, detroit, goulet                                                                                                 	|
| OTHER      	| computer_language          	| langage de programmation, ada, algol, algol w                                                                                  	|
| OTHER      	| bactericide                	| acide ethane-carboxylique, acide propanoique, acide propionique, ammonium quaternaire                                          	|
| OTHER      	| drinking_game              	| jeu a boire, barathon, biere-pong, caps                                                                                        	|
| OTHER      	| eye_illness                	| achromatopsie, amaurose, ambliopie, amblyope                                                                                   	|
| OTHER      	| wind                       	| vent, agueil, alize, aquilon                                                                                                   	|
| OTHER      	| delight                    	| plaisir, bein-etre, complaisance, delice                                                                                       	|
| OTHER      	| award                      	| cesar, croix de victoria, gerard, goncourt                                                                                     	|
| OTHER      	| bacteria                   	| bacterie, acetobacter, achromobacter, actinobacterie                                                                           	|
| OTHER      	| psychotropic_drug          	| psychotrope, alcool ethylique, cafe, carbonate de lithium                                                                      	|
| OTHER      	| imagination                	| imagination, chimere, creation, invention                                                                                      	|
| OTHER      	| martial_art                	| art martial, aikido, boxe chinoise, boxe thailandaise                                                                          	|
| OTHER      	| amino_acid                 	| acide amine, acide glutamique, alanine, arginine                                                                               	|
| OTHER      	| human_body_bone            	| acetabulum, arete, astragale, atlas                                                                                            	|
| OTHER      	| derived_from_illness       	| alcoolique, anorexique, anticoquelucheux, antisyphilitique                                                                     	|
| OTHER      	| weather                    	| neige, pluie, orage, tonnerre                                                                                                  	|
| OTHER      	| despair                    	| chagrin, desespoir, accablement, brisement                                                                                     	|
| OTHER      	| dance                      	| danse, alexandrine, allemande, anglaise                                                                                        	|
| OTHER      	| constellation              	| aigle, andromede, antinous, argo                                                                                               	|
| OTHER      	| suffering                  	| souffrance, blessure, affliction, torture                                                                                      	|
| OTHER      	| color                      	| couleur, blanc, azur, bleu                                                                                                     	|
| OTHER      	| fatty_acid                 	| acide amylique, acide arachidique, acide behenique, acide butanoique                                                           	|
| OTHER      	| organization               	| velo v, kalachuri, union astronomique internationale, iota sigma pi                                                            	|
| OTHER      	| success                    	| succes, celebrite, fortune, prouesse                                                                                           	|
| OTHER      	| drug                       	| drogue, acide, aya, ayahuasca                                                                                                  	|
| OTHER      	| alloy                      	| alliage, 45 permalloy, acier, acier inoxydable                                                                                 	|
| OTHER      	| geological_time            	| aalenien, acadien, acheuleen, aeronien                                                                                         	|
| OTHER      	| corvid_repellent           	| corvifuge, alphachloralose, anthraquinone, chloralose                                                                          	|
| OTHER      	| enallage                   	| balnave, bedave, bicrave, bouillave                                                                                            	|
| OTHER      	| sexual_position            	| position sexuelle, 69, 99, andromaque                                                                                          	|
| OTHER      	| unit_of_measure            	| zeptosteradian, zeptotesla, zeptovolt, zeptowatt                                                                               	|
| OTHER      	| sliding_sport              	| sport de glisse, barefoot, boardercross, bobsleigh                                                                             	|
| OTHER      	| figure_of_speech           	| figure de rhetorique, figure de style, figure rhetorique, abregement                                                           	|
| OTHER      	| social_class               	| etudiant, riche, pauvre, patron                                                                                                	|
| OTHER      	| traffic_lane               	| boulevard peripherique, peripherique exterieur, peripherique interieur, route                                                  	|
| OTHER      	| enzyme                     	| adn polymerase, alpha-amylase, amylase, arn polymerase                                                                         	|
| OTHER      	| fuel                       	| carburant, agrocarburant, bio-ethanol, biocarburant                                                                            	|
| OTHER      	| sport                      	| twirling baton, ultimate, ultra-marathon, ultrafond                                                                            	|
| OTHER      	| event                      	| imprevu, evenement, actualite, date                                                                                            	|
| OTHER      	| Sport combat               	| sport de combat, boxe, boxe anglaise, dambe                                                                                    	|
| OTHER      	| textile                    	| abaca, acetate, adatis, alexandrine                                                                                            	|
| OTHER      	| issue                      	| probleme, problematique, difficulte, souci                                                                                     	|
| OTHER      	| zodiac_sign                	| balance, belier, cancer, capricorne                                                                                            	|
| OTHER      	| religion                   	| asatru, bouddhisme, candomble, caodaisme                                                                                       	|
| OTHER      	| unkindness                 	| mechancete, agressivite, bassesse, desobligeance                                                                               	|
| OTHER      	| toy                        	| jouet, ballon de baudruche, bilboquet, bille                                                                                   	|
| OTHER      	| attribute                  	| age, taille, poids, corpulence                                                                                                 	|
| OTHER      	| std                        	| blennorragie, chancre mou, chlamydiose, gonorrhee                                                                              	|
| OTHER      	| friendship                 	| amitie, accointance, camaraderie, attachement                                                                                  	|
| OTHER      	| organ                      	| larynx, glande salivaire, glandes salivaires, meninges                                                                         	|
| OTHER      	| subatomic_particle         	| antielectron, antilepton, antimuon, antineutrino                                                                               	|
## Adjective categories

If the adjective refers to a noun, the category of the adjective becomes that of the noun.

Adjective categories group up words that evocate a common concept, and gives them positive or negative values according to their intensities (when possible).

For instance, the category **Difficulty** includes the word facile with an intensity of 7.0, and the word **difficile** with an intensity of -7.0.

| SUB         	| VALUE RANGE 	| EXAMPLES                	|
|-------------	|-------------	|-------------------------	|
| Anterior    	| None        	| avant                   	|
| Posterieur  	| None        	| apres                   	|
| Difficulty  	| [-10, 10]   	| facile, difficile, aisé 	|
| Judgement   	| [-10, 10]   	| bon, mauvais            	|
| Speed       	| [-10, 10]   	| lent, rapide            	|
| Temporality 	| None        	| actuel                  	|
| Time        	| None        	| long, court             	|
| Quantity    	| None        	| gros                    	|
| Scale       	| [-10, 10]   	| petit, grand            	|
| Shape       	| None        	| carré, rond             	|
| Beauty      	| [-10, 10]   	| moche, beau             	|
| Color       	| None        	| jaune, bleu             	|
| Happiness   	| [-10, 10]   	| content, malheureux     	|
| Feelings    	| None        	| soucieux                	|
| Trait       	| None        	| méchant, gentil, riche  	|

## Adverb categories

If the category of the adverb is 'manner' or 'time and aspect', then it takes the category of the adjective of reference.

| SUB                  	|
|----------------------	|
| manner               	|
| quantity             	|
| time and aspect      	|
| location             	|
| affirmation or doubt 	|
| negation             	|

## Interjection categories

| SUB        	|
|------------	|
| laught     	|
| compliment 	|
| thanks     	|
| no         	|
| yes        	|
| goodbye    	|
| greetings  	|

## Preposition categories

| SUPER                 	| SUB                         	|
|-----------------------	|-----------------------------	|
| -                     	| Approximation               	|
| -                     	| Comparaison                 	|
| -                     	| Duration                    	|
| Localisation          	| Source                      	|
| Localisation          	| Destination                 	|
| Localisation          	| Origin                      	|
| Localisation          	| Passage                     	|
| Localisation          	| Position                    	|
| Localisation          	| Spatial Approximation       	|
| Localisation          	| Temporal Approximation      	|
| Localisation          	| Temporal Localisation       	|
| Localisation          	| Interval Specification      	|
| -                     	| Manner                      	|
| Manner                	| Means                       	|
| Manner                	| Imitation                   	|
| -                     	| Accompaniment               	|
| Accompaniment         	| Addition                    	|
| Accompaniment         	| Concordance of Circumstance 	|
| Accompaniment         	| Inclusion                   	|
| Accompaniment         	| Exclusion                   	|
| -                     	| Quantity                    	|
| Quantity              	| Precise                     	|
| Quantity              	| Approximative               	|
| Quantity              	| Frequency                   	|
| Quantity              	| Proportion                  	|
| -                     	| Choices and exchanges       	|
| Choices and exchanges 	| Exchange                    	|
| Choices and exchanges 	| Alternatives                	|
| Choices and exchanges 	| Substitution                	|
| -                     	| Causality                   	|
| Causality             	| Intention                   	|
| Causality             	| Cause                       	|
| -                     	| Opposition                  	|
| Opposition            	| Inverse                     	|
| Opposition            	| Position From               	|
| -                     	| Without Considering         	|
| -                     	| Gradation                   	|
| Gradation             	| Priority                    	|
| Gradation             	| Subordination               	|
| Gradation             	| Hierarchy                   	|
| Gradation             	| Ranking                     	|
| Gradation             	| Degree Of                   	|
| -                     	| Relation                    	|
| -                     	| Theme                       	|

## Preposition sens

| CATEGORY        	|
|-----------------	|
| TO              	|
| UNTIL           	|
| TOWARDS         	|
| PER             	|
| WITH            	|
| ON              	|
| AGAINST         	|
| WITHIN          	|
| FOR             	|
| ACCORDING_TO    	|
| FOLOWING        	|
| AT              	|
| BEYOND          	|
| OVER            	|
| UNDER           	|
| UP TO           	|
| AWAY FROM       	|
| NEAR            	|
| AROUND          	|
| ALONG           	|
| THROUGH         	|
| VIA             	|
| VIA FRONT       	|
| VIA BACK        	|
| VIA UNDER       	|
| VIA ABOVE       	|
| VIA EST         	|
| VIA WEST        	|
| VIA NORTH       	|
| VIA SOUTH       	|
| VIA TOP         	|
| VIA BOTTOM      	|
| VIA LEFT        	|
| VIA RIGHT       	|
| AT BEGINNING_OF 	|
| NEXT_TO         	|
| RIGHT_TO        	|
| LEFT_TO         	|
| FRONT_TO        	|
| BACK_TO         	|
| WEST_TO         	|
| EST_TO          	|
| INSIDE_TO       	|
| OUTSIDE_TO      	|
| CLOSE_TO        	|
| AFTER           	|
| AT END_OF       	|
| AT BOTTOM_OF    	|
| AT MIDDLE_OF    	|
| AT NORTH_OF     	|
| AT SOUTH_OF     	|
| OUTSIDE_OF      	|
| INSIDE_OF       	|
| BEYOND_OF       	|
| NORTH_OF        	|
| SOUTH_OF        	|
| AROUND_OF       	|
| ABOVE           	|
| BEFORE          	|
| IN              	|
| BEHIND          	|
| FRONT           	|
| NEARBY          	|
| AT FRONT        	|
| AT BACK         	|
| AT BOTTOM       	|
| AT TOP          	|
| OUTSIDE         	|
| FRONT_OF        	|
| OUT_OF          	|
| BETWEEN         	|
| RELATIVE_TO     	|
| FROM            	|
| FROM BACK       	|
| FROM FRONT      	|
| FROM UNDER      	|
| FROM ABOVE      	|
| FROM EST        	|
| FROM WEST       	|
| FROM NORTH      	|
| FROM SOUTH      	|
| FROM INSIDE     	|
| FROM OUTSIDE    	|
| NULL            	|

## Preposition next

| NEXT      	|
|-----------	|
| space     	|
| time      	|
| abstract  	|
| matter    	|
| situation 	|
| NULL      	|

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)