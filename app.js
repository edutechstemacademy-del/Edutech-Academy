const modules = [
  {
    slug: "snapshot",
    icon: "EX",
    title: "Exam Snapshot",
    subtitle: "Paper map",
    examFocus: [
      "Section 1 has 30 multiple-choice marks.",
      "Section 2 has five 10-mark short-answer questions.",
      "Section 3 matches storage device pictures to names.",
      "Section 4 has 15 true-or-false statements."
    ],
    overview: "Use the paper structure to revise in layers: facts first, then steps, then examples, then full answers.",
    keyPoints: [
      {
        title: "What the exam is really testing",
        items: [
          "You can identify common computer terms.",
          "You can explain why a feature, device, or safety rule matters.",
          "You can follow file-management steps in order.",
          "You can choose safe, responsible online behaviour."
        ]
      },
      {
        title: "Best scoring strategy",
        items: [
          "For multiple choice, remove answers that do not match the topic.",
          "For short answers, give five clear points and explain each one.",
          "For true or false, watch for words such as always, never, no longer, and only."
        ]
      }
    ],
    commonMistakes: [
      "Writing a list only when the question says explain.",
      "Mixing up input devices and output devices.",
      "Confusing cloud storage with clouds in the sky.",
      "Choosing every answer with 'all of the above' before reading each option."
    ],
    walkthrough: {
      title: "How the marks are arranged",
      summary: "A strong paper needs quick recall for Section 1, full sentences for Section 2, visual recognition for Section 3, and careful wording for Section 4.",
      diagram: "exam",
      steps: [
        "Start with the topics that appear in many sections: storage, maintenance, Word Processing, and digital citizenship.",
        "Practise the 30 multiple-choice style questions until you can explain why the wrong answers are wrong.",
        "Write one sample paragraph for every Section 2 prompt.",
        "Finish with true-or-false statements because they reward careful reading."
      ]
    },
    shortPrompts: [
      {
        prompt: "Create a 30-minute revision plan for this exam.",
        checklist: [
          "Names at least three exam topics.",
          "Includes multiple-choice practice.",
          "Includes short-answer writing.",
          "Leaves time to review mistakes.",
          "Uses clear time blocks."
        ],
        sample: "10 minutes: revise Word Processing and file steps. 8 minutes: quiz digital citizenship and maintenance. 8 minutes: write one short-answer checklist. 4 minutes: review wrong answers and mark weak topics."
      }
    ],
    quiz: [
      {
        prompt: "Which section asks students to match storage device pictures with names?",
        options: ["Section 1", "Section 2", "Section 3", "Section 4"],
        answer: 2,
        explanation: "Section 3 is the matching pictures with words section."
      },
      {
        prompt: "What is the safest way to answer a 10-mark 'list five and explain' question?",
        options: ["Give five named points with one purpose or example for each", "Write one long paragraph about only one point", "Draw a picture only", "Write yes or no answers"],
        answer: 0,
        explanation: "The marks usually reward both the five items and the explanations."
      },
      {
        prompt: "True or false questions require careful reading of absolute words such as 'never' and 'only'.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Words such as never, only, always, and no longer often change the whole meaning."
      }
    ]
  },
  {
    slug: "word",
    icon: "WP",
    title: "Word Processing",
    subtitle: "Microsoft Word",
    examFocus: [
      "Purpose of Word Processing.",
      "Parts of the Microsoft Word window.",
      "Text editing features: copy, paste, delete, bold, highlight, alignment.",
      "Caps Lock, Num Lock, ruler, title bar, and menus."
    ],
    overview: "Word Processing means using software such as Microsoft Word to create, edit, format, save, and print text documents.",
    keyPoints: [
      {
        title: "Common uses",
        items: ["Letters", "Reports", "Books", "Class notes", "End-of-term reports"]
      },
      {
        title: "Window parts",
        items: ["Title Bar shows the document name and window controls.", "Menu tabs hold tools such as File, Home, and Insert.", "Ruler shows margins, tabs, and indents.", "Scroll bars move through the document.", "Status Bar gives page and document information."]
      },
      {
        title: "Text features",
        items: ["Copy and paste duplicate text.", "Bold and highlight make text stand out.", "Delete removes text.", "Alignment moves text left, right, centre, or justified."]
      },
      {
        title: "Keyboard locks",
        items: ["Caps Lock changes letter typing between upper case and lower case.", "Num Lock changes the numeric keypad between numbers and movement keys."]
      }
    ],
    commonMistakes: [
      "Saying the toolbar is where words are typed. Words are typed in the document area.",
      "Confusing the title bar with the File/Home/Insert menus.",
      "Forgetting that the ruler helps with margins, tabs, and indents.",
      "Using 'Word Processing' to mean sending emails or making videos."
    ],
    walkthrough: {
      title: "Read the Microsoft Word window",
      summary: "If you can label the parts of the window, the multiple-choice questions become much easier.",
      diagram: "word",
      steps: [
        "Look at the top: the Title Bar shows the document name and window buttons.",
        "Below it, Menu Tabs such as File, Home, and Insert group the commands.",
        "The Ruler shows margins, tab stops, and indents for the page.",
        "The page area is where text is typed, edited, copied, pasted, and deleted.",
        "The Status Bar shows useful information, while Scroll Bars help move around."
      ]
    },
    shortPrompts: [
      {
        prompt: "List five Word Processing features commonly used to create documents and explain the purpose of each.",
        checklist: [
          "Names five features.",
          "Explains each feature's purpose.",
          "Uses document examples such as letters, reports, or notes.",
          "Avoids naming unrelated software.",
          "Writes in clear complete phrases."
        ],
        sample: "Bold makes important words darker so they stand out. Alignment moves text to the left, centre, or right. Copy and paste duplicates text quickly. Spell check helps find spelling errors. Save stores the document for later use."
      }
    ],
    quiz: [
      {
        prompt: "Which software in the Microsoft suite is used for Word Processing?",
        options: ["Microsoft Excel", "Microsoft Word", "Microsoft Access", "Microsoft Outlook"],
        answer: 1,
        explanation: "Microsoft Word is the word processor used for documents."
      },
      {
        prompt: "The ruler in Microsoft Word is mainly used to show what?",
        options: ["The document name", "Margins, tab settings, and indents", "Only shortcut buttons", "The number of title bars"],
        answer: 1,
        explanation: "The ruler helps control page layout features such as margins, tabs, and indents."
      },
      {
        prompt: "When using Microsoft Word, words can be aligned to the:",
        options: ["Left, right, and centre", "Title bar", "Horizontal scroll bar", "Toolbars only"],
        answer: 0,
        explanation: "Text alignment controls where text sits across the line."
      },
      {
        prompt: "Which action is not done to words in the document area?",
        options: ["Copied and pasted", "Bolded or highlighted", "Deleted", "Typed in the toolbar"],
        answer: 3,
        explanation: "Words are typed in the document area, not in the toolbar."
      },
      {
        prompt: "Caps Lock is used to toggle between:",
        options: ["Numbers and letters", "Spacebar and Backspace", "Upper case and lower case letters", "Symbols and pictures"],
        answer: 2,
        explanation: "Caps Lock affects letter case."
      }
    ]
  },
  {
    slug: "files",
    icon: "FM",
    title: "Files and Storage",
    subtitle: "Save, delete, match",
    examFocus: [
      "Folders and directories.",
      "Creating and deleting files or folders.",
      "Saving offline and online.",
      "Secondary storage devices: flash memory, optical disk, cloud storage, hard disk drive, magnetic tape."
    ],
    overview: "File management is how you organise, save, name, find, and remove digital work. Storage devices hold information when the computer is off.",
    keyPoints: [
      {
        title: "Folders and files",
        items: ["A folder is also called a directory.", "Folders keep similar files together.", "A file should have a clear name so it can be found later."]
      },
      {
        title: "Offline saving",
        items: ["Click File.", "Choose Save As.", "Select a storage option such as a flash drive.", "Type the document name.", "Click Save."]
      },
      {
        title: "Online saving",
        items: ["Click File and Save As.", "Choose OneDrive or another cloud service.", "Sign in if needed.", "Name the document.", "Save to the online location."]
      },
      {
        title: "Storage examples",
        items: ["Flash memory: flash drive or memory card.", "Optical disk: CD or DVD.", "Cloud storage: online storage service.", "Hard disk drive: internal or external storage.", "Magnetic tape: cartridge used for backups."]
      }
    ],
    commonMistakes: [
      "Calling a folder a bag or container in the exam.",
      "Mixing online saving with saving to a flash drive.",
      "Deleting a file without checking the confirmation box.",
      "Forgetting that cloud storage requires internet access."
    ],
    walkthrough: {
      title: "Save and organise a document",
      summary: "Most file-management questions are step questions. Put the actions in a sensible order.",
      diagram: "save",
      steps: [
        "Create a folder when you need a named place to group related files.",
        "Open the document, then choose File and Save As.",
        "Choose the place: device storage for offline or OneDrive/cloud for online.",
        "Type a clear file name.",
        "Click Save and check that the file appears in the correct folder."
      ]
    },
    shortPrompts: [
      {
        prompt: "Explain the difference between saving a file offline and saving a file online.",
        checklist: [
          "Defines offline saving.",
          "Defines online saving.",
          "Mentions a storage example for each.",
          "Explains internet connection for online saving.",
          "Uses clear steps or comparison words."
        ],
        sample: "Saving offline stores a file on a local device such as a flash drive or hard drive. Saving online stores it in cloud storage such as OneDrive. Online saving usually needs an internet connection and sign-in."
      }
    ],
    quiz: [
      {
        prompt: "One way to keep files of the same type together is to store them in a directory or:",
        options: ["Folder", "Bag", "Container", "Headphones"],
        answer: 0,
        explanation: "A directory is another name for a folder."
      },
      {
        prompt: "Right-click desktop, select New, select Folder, then give the icon a name. These are steps to:",
        options: ["Create a folder", "Delete a sub-folder", "Create software", "Delete a file"],
        answer: 0,
        explanation: "Those actions create and name a folder."
      },
      {
        prompt: "File, Save As, select flash drive, name the document, click Save. These are steps to:",
        options: ["Save a file offline", "Delete a sub-folder", "Save a file online", "Create software"],
        answer: 0,
        explanation: "A flash drive is local/offline storage."
      },
      {
        prompt: "Which storage name matches a CD or DVD?",
        options: ["Flash memory", "Optical disk", "Cloud storage service", "Magnetic tape"],
        answer: 1,
        explanation: "CDs and DVDs are optical disks because lasers read them."
      },
      {
        prompt: "Which statement about cloud storage is true?",
        options: ["It is seen outdoors in the sky", "It is no longer used", "It stores files through online services", "It never needs internet"],
        answer: 2,
        explanation: "Cloud storage means saving files through internet-based services."
      }
    ]
  },
  {
    slug: "citizenship",
    icon: "DC",
    title: "Digital Citizenship",
    subtitle: "Netiquette and safety",
    examFocus: [
      "Appropriate, responsible, and intelligent technology use.",
      "Good netiquette.",
      "Flaming and online provocation.",
      "Cyberbullying examples and safe responses."
    ],
    overview: "Digital citizenship means using technology in safe, respectful, responsible, and intelligent ways.",
    keyPoints: [
      {
        title: "Good netiquette",
        items: ["Stay on topic in online forums.", "Do not type everything in capital letters.", "Do not forward chain messages to everyone.", "Ask permission before sharing videos or personal information."]
      },
      {
        title: "Flaming",
        items: ["Flaming means posting content intended to trigger anger or hostile responses.", "It often creates arguments instead of solving problems."]
      },
      {
        title: "Cyberbullying",
        items: ["Posting personal information about someone can be cyberbullying.", "Abusive comments and harassment are unsafe online behaviour.", "Evidence should be saved and a trusted adult should be told."]
      },
      {
        title: "Safe response",
        items: ["Do not meet the person in real life.", "Block or report the account when possible.", "Pause or secure the account if needed.", "Tell a teacher, parent, or guardian."]
      }
    ],
    commonMistakes: [
      "Thinking ALL CAPS is good netiquette. It can look like shouting.",
      "Saying cyberbullying is encouraged or just normal communication.",
      "Choosing to meet an online harasser in person.",
      "Sharing someone else's video or personal details without permission."
    ],
    walkthrough: {
      title: "Online choice decision tree",
      summary: "Before posting, ask whether the action is respectful, legal, safe, and useful.",
      diagram: "citizenship",
      steps: [
        "Stop: read the message again before you react.",
        "Think: ask if it is kind, private, legal, and on topic.",
        "Act: post respectfully, report harmful behaviour, or ask an adult for help.",
        "Save evidence if someone is being bullied or threatened.",
        "Do not reply with abuse because that can make the problem worse."
      ]
    },
    shortPrompts: [
      {
        prompt: "Discuss five ways students can practise good digital citizenship.",
        checklist: [
          "Names five behaviours.",
          "Explains why each behaviour is safe or respectful.",
          "Mentions privacy or permission.",
          "Mentions reporting or asking for help.",
          "Avoids encouraging harmful online behaviour."
        ],
        sample: "Students should use respectful language, stay on topic, avoid all-caps shouting, ask permission before sharing media, and report cyberbullying to a trusted adult."
      }
    ],
    quiz: [
      {
        prompt: "Digital citizenship means learning to use technology in ways that are:",
        options: ["Appropriate, responsible, and intelligent", "Only fast and entertaining", "Investigative, entrepreneurial, and friendly", "None of the above"],
        answer: 0,
        explanation: "The exam definition focuses on appropriate, responsible, and intelligent use."
      },
      {
        prompt: "Which action is an example of good netiquette?",
        options: ["Typing every comment in ALL CAPS", "Posting any video you receive", "Forwarding chain letters to all friends", "Staying on topic in a forum"],
        answer: 3,
        explanation: "Staying on topic is respectful and useful online behaviour."
      },
      {
        prompt: "Which is an example of cyberbullying?",
        options: ["Sending friendly emails", "Helping a friend with homework", "Gathering and posting personal information about someone", "None of the above"],
        answer: 2,
        explanation: "Posting someone's personal information to harm or embarrass them is cyberbullying."
      },
      {
        prompt: "A safe response to online harassment is to:",
        options: ["Meet the person to discuss it", "Save evidence, block/report, and tell a trusted adult", "Reply with insults", "Post the person's private information"],
        answer: 1,
        explanation: "The safest approach is to avoid direct confrontation, preserve evidence, and get help."
      },
      {
        prompt: "Flaming refers to online content that intentionally triggers angry responses.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Flaming is hostile or provocative online communication."
      }
    ]
  },
  {
    slug: "maintenance",
    icon: "MT",
    title: "Performance and Maintenance",
    subtitle: "Keep it running",
    examFocus: [
      "Practices that keep a computer running smoothly.",
      "Software updates, disk cleanup, data backup, hardware cleaning, startup management.",
      "Why maintenance improves performance and device life span."
    ],
    overview: "Computer performance and maintenance are the regular actions that keep a device secure, clean, responsive, and reliable.",
    keyPoints: [
      {
        title: "Software updates",
        items: ["Fix bugs.", "Improve security.", "Help software run efficiently.", "Keep the operating system current."]
      },
      {
        title: "Disk cleanup",
        items: ["Deletes unnecessary files.", "Frees disk space.", "Can improve system response."]
      },
      {
        title: "Data backup",
        items: ["Saves important files on another device or service.", "Protects work if hardware fails.", "Prevents data loss."]
      },
      {
        title: "Hardware cleaning",
        items: ["Removes dust.", "Uses safe tools such as compressed air.", "Supports cooling.", "Can extend device life span."]
      }
    ],
    commonMistakes: [
      "Saying maintenance means never updating software.",
      "Calling disk cleanup the same as deleting useful folders.",
      "Forgetting that backups protect against data loss.",
      "Thinking hardware cleaning does not include dust removal."
    ],
    walkthrough: {
      title: "Maintenance loop",
      summary: "Maintenance is repeated. A computer stays healthier when each action is done regularly.",
      diagram: "maintenance",
      steps: [
        "Update software to fix bugs and strengthen security.",
        "Clean up unnecessary files to free storage space.",
        "Back up important work to another storage location.",
        "Clean hardware carefully so dust does not block cooling.",
        "Manage startup programs so the computer boots faster."
      ]
    },
    shortPrompts: [
      {
        prompt: "Explain five ways to maintain computer performance.",
        checklist: [
          "Names five maintenance practices.",
          "Explains how each practice helps.",
          "Mentions security or bug fixes for updates.",
          "Mentions free space for disk cleanup.",
          "Mentions preventing data loss for backup."
        ],
        sample: "Software updates fix bugs and improve security. Disk cleanup removes unnecessary files. Data backup protects important files. Hardware cleaning removes dust for cooling. Startup management reduces boot time."
      }
    ],
    quiz: [
      {
        prompt: "Computer performance and maintenance refers to:",
        options: ["Practices to keep the computer running smoothly", "Updating software regularly", "Cleaning up disk space", "All of the above"],
        answer: 3,
        explanation: "All listed actions are part of performance and maintenance."
      },
      {
        prompt: "Disk cleanup is a process where you:",
        options: ["Save files online", "Delete unnecessary files to free disk space", "Delete a sub-folder only", "Create software"],
        answer: 1,
        explanation: "Disk cleanup removes unneeded files so the system has more free space."
      },
      {
        prompt: "Data backup helps in case of hardware failure.",
        options: ["True", "False"],
        answer: 0,
        explanation: "A backup keeps another copy of important files."
      },
      {
        prompt: "Hardware cleaning refers to removing:",
        options: ["Dust using safe cleaning tools", "The operating system", "All software", "Every saved document"],
        answer: 0,
        explanation: "Hardware cleaning includes dust removal to help cooling and reliability."
      },
      {
        prompt: "Keeping software up to date can enhance computer performance and security.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Updates can fix bugs, improve security, and sometimes improve efficiency."
      }
    ]
  },
  {
    slug: "devices",
    icon: "IO",
    title: "Input and Output Devices",
    subtitle: "Computer system",
    examFocus: [
      "Five input devices and how each is used.",
      "Five output devices and how each is used.",
      "Difference between sending data into a computer and receiving results from a computer.",
      "Types of computers and advantages."
    ],
    overview: "Input devices send data into a computer. Output devices present information from the computer to the user.",
    keyPoints: [
      {
        title: "Input examples",
        items: ["Keyboard: types letters and numbers.", "Mouse: points, clicks, selects, and drags.", "Microphone: records sound.", "Scanner: copies paper images into the computer.", "Webcam: captures video or photos.", "Touchscreen: accepts touch commands."]
      },
      {
        title: "Output examples",
        items: ["Monitor: displays text, pictures, and video.", "Printer: produces hard copies on paper.", "Speakers: play sound.", "Projector: shows the screen to a group.", "Headphones: output sound privately."]
      },
      {
        title: "Types of computers",
        items: ["Desktop: powerful and comfortable for a fixed place.", "Laptop: portable and has built-in screen and keyboard.", "Tablet: light and touch-based.", "Smartphone: pocket-sized with apps and communication.", "Server: shares services or files with many users."]
      }
    ],
    commonMistakes: [
      "Calling a monitor an input device because you look at it.",
      "Calling a keyboard an output device because letters appear on screen.",
      "Giving a device name without describing how it is used.",
      "Listing phones and tablets without giving an advantage."
    ],
    walkthrough: {
      title: "Follow the information flow",
      summary: "Input goes into the computer. Processing happens inside. Output comes back to the user.",
      diagram: "io",
      steps: [
        "Start with the action: typing, clicking, scanning, recording, or touching.",
        "The input device sends data into the computer.",
        "The computer processes the data.",
        "The output device shows, prints, or plays the result.",
        "In a short-answer question, always say how the device is used."
      ]
    },
    shortPrompts: [
      {
        prompt: "List five input devices and describe how each is used.",
        checklist: [
          "Names five input devices.",
          "Describes how each sends data into the computer.",
          "Does not include output-only devices.",
          "Uses clear examples.",
          "Keeps each explanation connected to the device."
        ],
        sample: "A keyboard is used to type text. A mouse is used to point and click. A scanner copies paper images into the computer. A microphone records sound. A webcam captures video."
      },
      {
        prompt: "List five output devices and state how each is used.",
        checklist: [
          "Names five output devices.",
          "Describes how each presents information.",
          "Does not include input-only devices.",
          "Mentions sound, display, or print where suitable.",
          "Uses complete phrases."
        ],
        sample: "A monitor displays information. A printer produces paper copies. Speakers play sound. A projector shows the screen to a group. Headphones play sound privately."
      }
    ],
    quiz: [
      {
        prompt: "Which device is mainly an input device?",
        options: ["Printer", "Keyboard", "Monitor", "Speaker"],
        answer: 1,
        explanation: "A keyboard sends typed data into the computer."
      },
      {
        prompt: "Which device is mainly an output device?",
        options: ["Scanner", "Mouse", "Microphone", "Projector"],
        answer: 3,
        explanation: "A projector displays information from the computer to a group."
      },
      {
        prompt: "A scanner is used to:",
        options: ["Play sound", "Display images", "Copy paper images into the computer", "Print on paper"],
        answer: 2,
        explanation: "A scanner captures paper documents or pictures as digital data."
      },
      {
        prompt: "Which advantage best matches a laptop computer?",
        options: ["It is portable", "It cannot run without a desk", "It is only for printing", "It is a storage disk"],
        answer: 0,
        explanation: "A laptop is designed to be carried and used in different places."
      }
    ]
  },
  {
    slug: "lab",
    icon: "LS",
    title: "Computer Lab Safety",
    subtitle: "Personal rules",
    examFocus: [
      "Five personal safety rules in a computer lab.",
      "Protecting people and equipment.",
      "Safe behaviour around cables, food, drinks, electricity, and movement."
    ],
    overview: "Computer lab safety rules protect students, teachers, and equipment from accidents and damage.",
    keyPoints: [
      {
        title: "Personal safety rules",
        items: ["Walk, do not run.", "Keep bags away from walkways.", "Do not eat or drink near computers.", "Keep hands dry around electrical equipment.", "Report damaged cables or equipment.", "Sit correctly to avoid strain."]
      },
      {
        title: "Equipment care",
        items: ["Use devices gently.", "Do not pull cables.", "Keep the work area tidy.", "Log out when finished.", "Ask before moving equipment."]
      }
    ],
    commonMistakes: [
      "Only writing rules for protecting computers and forgetting personal safety.",
      "Writing one-word rules without discussion.",
      "Leaving out electricity and cable hazards.",
      "Forgetting to say what to do when equipment is damaged."
    ],
    walkthrough: {
      title: "Spot the lab hazards",
      summary: "A good lab-safety answer names the rule and explains the accident it prevents.",
      diagram: "safety",
      steps: [
        "Look for trip hazards such as bags, cables, or running.",
        "Look for electrical hazards such as wet hands or damaged wires.",
        "Look for equipment risks such as food, drinks, rough handling, or pulling cables.",
        "Look for health risks such as poor posture or eye strain.",
        "For each rule, explain the reason in one sentence."
      ]
    },
    shortPrompts: [
      {
        prompt: "Discuss five personal safety rules of a computer lab.",
        checklist: [
          "Names five safety rules.",
          "Explains the danger each rule prevents.",
          "Includes at least one electricity or cable rule.",
          "Includes at least one behaviour rule.",
          "Uses complete sentences."
        ],
        sample: "Walk in the lab to prevent falls. Keep bags away from walkways to avoid tripping. Do not eat or drink near computers because spills can cause damage or shock. Report damaged cables to prevent injury. Sit correctly to avoid body strain."
      }
    ],
    quiz: [
      {
        prompt: "Why should food and drinks stay away from computers?",
        options: ["They improve performance", "They can spill and damage equipment or create danger", "They make the keyboard faster", "They replace disk cleanup"],
        answer: 1,
        explanation: "Liquids and crumbs can damage hardware, and liquids near electricity are dangerous."
      },
      {
        prompt: "Which is the best response to a damaged cable?",
        options: ["Pull it harder", "Ignore it", "Report it to the teacher", "Wrap it around your chair"],
        answer: 2,
        explanation: "Damaged electrical equipment should be reported and handled by an adult."
      },
      {
        prompt: "Keeping bags out of walkways helps prevent:",
        options: ["Typing errors", "Tripping accidents", "Software piracy", "Cloud storage"],
        answer: 1,
        explanation: "Bags and cables in walkways can cause people to trip."
      }
    ]
  },
  {
    slug: "final",
    icon: "FP",
    title: "Final Practice",
    subtitle: "Mixed revision",
    examFocus: [
      "Mixed multiple-choice practice.",
      "True-or-false review.",
      "Common exam traps.",
      "Quick explanations for every answer."
    ],
    overview: "Final practice mixes the paper topics so you can check whether you remember the idea without relying on the module name.",
    keyPoints: [
      {
        title: "High-value facts",
        items: [
          "Word Processing creates documents such as letters, reports, and books.",
          "Folders/directories organise files.",
          "Backups prevent data loss.",
          "Good netiquette includes staying on topic and avoiding all-caps shouting.",
          "Cloud storage is online storage and usually needs internet access."
        ]
      },
      {
        title: "True-or-false traps",
        items: [
          "Cloud storage is not a cloud in the sky.",
          "Cyberbullying is not encouraged.",
          "Netiquette is not only about bad ways online.",
          "Hardware cleaning includes dusting.",
          "Ease of use and accessibility are cloud-storage advantages, not disadvantages."
        ]
      }
    ],
    commonMistakes: [
      "Rushing true-or-false questions.",
      "Choosing an answer because it contains a familiar word.",
      "Not matching the question to the exact topic.",
      "Forgetting to review wrong answers."
    ],
    walkthrough: {
      title: "Final check routine",
      summary: "Use a quick loop: answer, explain, correct, retry.",
      diagram: "final",
      steps: [
        "Answer a mixed question without looking at notes.",
        "Say why your answer is correct.",
        "If wrong, read the explanation and mark the topic for review.",
        "Write one sentence from memory about the topic.",
        "Retry later until the answer and explanation both feel easy."
      ]
    },
    shortPrompts: [
      {
        prompt: "Write a short final-exam reflection: which two topics are strongest and which two need review?",
        checklist: [
          "Names two strong topics.",
          "Names two review topics.",
          "Gives a reason for each choice.",
          "Includes one action for improvement.",
          "Uses honest self-assessment."
        ],
        sample: "My strongest topics are Word Processing and lab safety because I can list features and rules. I need to review storage devices and maintenance because I confuse cloud and offline storage. I will practise those quiz questions again."
      }
    ],
    quiz: [
      {
        prompt: "Which is not a purpose of Word Processing in this exam?",
        options: ["Creating letters", "Creating reports", "Creating books", "Making videos"],
        answer: 3,
        explanation: "Word Processing is for text documents, not video production."
      },
      {
        prompt: "DVD is listed in many school notes as Digital Video Disc.",
        options: ["True", "False"],
        answer: 0,
        explanation: "For this exam style, treat the statement as true. In some technical contexts, DVD is also expanded as Digital Versatile Disc."
      },
      {
        prompt: "CD-ROM stands for Compact Disc Read-Only Memory.",
        options: ["True", "False"],
        answer: 0,
        explanation: "That is the standard expansion of CD-ROM."
      },
      {
        prompt: "Cloud storage is no longer used for storing data.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Cloud storage is widely used for saving and accessing files online."
      },
      {
        prompt: "Startup management can reduce boot-up time.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Reducing unnecessary startup programs can help a computer start faster."
      },
      {
        prompt: "It is good netiquette to write every online message in all capital letters.",
        options: ["True", "False"],
        answer: 1,
        explanation: "All caps can look like shouting, so it is usually poor netiquette."
      },
      {
        prompt: "Which is an advantage of cloud storage rather than a disadvantage?",
        options: ["Requires internet connection", "Can be slower", "Ease of access from different devices", "Depends on online service availability"],
        answer: 2,
        explanation: "Accessibility across devices is usually a benefit of cloud storage."
      }
    ]
  }
];

const STORAGE_KEY = "form1-it-study-guide-state-v1";

const state = loadState();
const refs = {
  moduleNav: document.querySelector("#moduleNav"),
  moduleTitle: document.querySelector("#moduleTitle"),
  lessonPanel: document.querySelector("#lessonPanel"),
  sideQuiz: document.querySelector("#sideQuiz"),
  confidenceOptions: document.querySelector("#confidenceOptions"),
  targetList: document.querySelector("#targetList"),
  markReview: document.querySelector("#markReview"),
  overallPercent: document.querySelector("#overallPercent"),
  overallMeter: document.querySelector("#overallMeter"),
  correctCount: document.querySelector("#correctCount"),
  reviewCount: document.querySelector("#reviewCount"),
  confidenceLabel: document.querySelector("#confidenceLabel"),
  resetProgress: document.querySelector("#resetProgress")
};

function loadState() {
  const fallback = {
    moduleIndex: 0,
    tab: "learn",
    quizIndex: {},
    answers: {},
    confidence: {},
    review: {},
    shortChecks: {}
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...fallback, ...saved } : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function activeModule() {
  return modules[state.moduleIndex] || modules[0];
}

function answerId(moduleSlug, questionIndex) {
  return `${moduleSlug}:${questionIndex}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const module = activeModule();
  refs.moduleTitle.textContent = module.title;
  renderNav();
  renderTabs();
  renderMainPanel(module);
  renderSideQuiz(module);
  renderConfidence(module);
  renderTargets(module);
  renderProgress();
  refs.markReview.classList.toggle("is-active", Boolean(state.review[module.slug]));
  refs.markReview.setAttribute("aria-pressed", String(Boolean(state.review[module.slug])));
  saveState();
}

function renderNav() {
  refs.moduleNav.innerHTML = modules
    .map((module, index) => {
      const score = moduleScore(module);
      const reviewClass = state.review[module.slug] ? " is-review" : "";
      const activeClass = index === state.moduleIndex ? " is-active" : "";
      return `
        <button class="module-button${activeClass}${reviewClass}" type="button" data-module="${index}">
          <span class="nav-icon" aria-hidden="true">${module.icon}</span>
          <span class="nav-copy">
            <span class="nav-title">${escapeHtml(module.title)}</span>
            <span class="nav-subtitle">${escapeHtml(module.subtitle)}</span>
          </span>
          <span class="nav-score" aria-label="${score.correct} of ${score.total} correct">${score.correct}/${score.total}</span>
        </button>
      `;
    })
    .join("");

  refs.moduleNav.querySelectorAll(".module-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.moduleIndex = Number(button.dataset.module);
      render();
      refs.lessonPanel.focus();
    });
  });
}

function renderTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.tab === state.tab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderMainPanel(module) {
  if (state.tab === "walkthrough") {
    refs.lessonPanel.innerHTML = renderWalkthrough(module);
    return;
  }
  if (state.tab === "quiz") {
    refs.lessonPanel.innerHTML = renderQuizPage(module);
    attachQuizEvents(refs.lessonPanel, module);
    return;
  }
  if (state.tab === "short") {
    refs.lessonPanel.innerHTML = renderShortAnswer(module);
    attachShortAnswerEvents(module);
    return;
  }
  refs.lessonPanel.innerHTML = renderLearn(module);
}

function renderLearn(module) {
  const keyCards = module.keyPoints
    .map((group) => `
      <section class="mini-card">
        <h4>${escapeHtml(group.title)}</h4>
        <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    `)
    .join("");

  return `
    <div class="lesson-intro">
      <div class="intro-copy">
        <p class="panel-label">Study zone</p>
        <h3>${escapeHtml(module.title)}</h3>
        <p>${escapeHtml(module.overview)}</p>
      </div>
      <section class="focus-strip">
        <h4>Exam focus</h4>
        <ul>${module.examFocus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    </div>

    <div class="key-grid">${keyCards}</div>

    <section class="callout">
      <h4>Common traps</h4>
      <ul class="mistake-list">${module.commonMistakes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `;
}

function renderWalkthrough(module) {
  return `
    <div class="walkthrough">
      <div>
        <p class="panel-label">Guided walkthrough</p>
        <h3>${escapeHtml(module.walkthrough.title)}</h3>
        <p>${escapeHtml(module.walkthrough.summary)}</p>
      </div>
      <div class="diagram-frame">
        <p class="diagram-title">${escapeHtml(module.walkthrough.title)}</p>
        ${renderDiagram(module.walkthrough.diagram)}
      </div>
      <section class="mini-card">
        <h4>Steps to remember</h4>
        <ol class="step-list">${module.walkthrough.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      </section>
    </div>
  `;
}

function renderQuizPage(module) {
  const quizCards = module.quiz
    .map((question, index) => renderQuizCard(module, question, index, "full"))
    .join("");
  return `
    <div class="quiz-page">
      <div>
        <p class="panel-label">Practice bank</p>
        <h3>${escapeHtml(module.title)} quiz</h3>
        <p>Answer each item, read the explanation, and retry weak topics from the navigation rail.</p>
      </div>
      <div class="quiz-grid">${quizCards}</div>
    </div>
  `;
}

function renderShortAnswer(module) {
  const promptIndex = state.shortPromptIndex?.[module.slug] || 0;
  const prompt = module.shortPrompts[promptIndex] || module.shortPrompts[0];
  const checks = state.shortChecks[`${module.slug}:${promptIndex}`] || [];
  const options = module.shortPrompts
    .map((item, index) => `<option value="${index}" ${index === promptIndex ? "selected" : ""}>Prompt ${index + 1}: ${escapeHtml(item.prompt.slice(0, 58))}</option>`)
    .join("");

  return `
    <div class="short-answer">
      <div class="short-answer-head">
        <div>
          <p class="panel-label">Written response</p>
          <h3>Short-answer practice</h3>
          <p>${escapeHtml(prompt.prompt)}</p>
        </div>
        <select id="shortPromptSelect" aria-label="Choose short-answer prompt">${options}</select>
      </div>

      <div class="short-grid">
        <section class="answer-builder">
          <h4>Your response</h4>
          <textarea id="shortDraft" spellcheck="true" placeholder="Write your answer here. Aim for five clear points with explanations."></textarea>
          <div class="quiz-actions">
            <button class="primary-button" id="showSample" type="button">Show sample</button>
            <button class="small-button" id="clearDraft" type="button">Clear</button>
          </div>
          <div class="feedback" id="sampleAnswer">
            <strong>Sample answer</strong>
            ${escapeHtml(prompt.sample)}
          </div>
        </section>

        <section class="answer-builder">
          <h4>Marking checklist</h4>
          <ul class="short-checklist">
            ${prompt.checklist
              .map((item, index) => `
                <li>
                  <label>
                    <input type="checkbox" data-check="${index}" ${checks.includes(index) ? "checked" : ""} />
                    <span>${escapeHtml(item)}</span>
                  </label>
                </li>
              `)
              .join("")}
          </ul>
        </section>
      </div>
    </div>
  `;
}

function renderDiagram(type) {
  if (type === "word") {
    return `
      <div class="word-window" aria-label="Microsoft Word window parts diagram">
        <div class="title-bar">Title Bar: document name and window buttons</div>
        <div class="menu-tabs">Menu Tabs: File, Home, Insert, Page Layout</div>
        <div class="ruler">Ruler: margins, tabs, indents</div>
        <div class="scrollbar">Scroll Bar</div>
        <div class="page-area" aria-label="Document page area">
          <span class="page-line"></span>
          <span class="page-line"></span>
          <span class="page-line"></span>
          <span class="page-line"></span>
        </div>
        <div class="status-bar">Status Bar: page and document information</div>
      </div>
    `;
  }

  if (type === "save") {
    return `
      <div class="flow-diagram" aria-label="Save file flow diagram">
        ${["Document open", "File", "Save As", "Choose storage", "Name file", "Save"].map((step) => `<div class="flow-node">${step}</div>`).join("")}
      </div>
      <div class="storage-grid" aria-label="Storage device matching diagram">
        ${[
          ["USB", "Flash memory", "Small portable storage"],
          ["CD", "Optical disk", "CD or DVD"],
          ["NET", "Cloud storage", "Online service"],
          ["HDD", "Hard disk drive", "Large local storage"],
          ["TAPE", "Magnetic tape", "Backup cartridge"]
        ]
          .map((item) => `<div class="storage-node"><span class="storage-icon">${item[0]}</span>${item[1]}<small>${item[2]}</small></div>`)
          .join("")}
      </div>
    `;
  }

  if (type === "citizenship") {
    return `
      <div class="citizen-tree" aria-label="Digital citizenship decision tree">
        <div class="tree-node"><strong>Stop</strong>Pause before posting or replying.</div>
        <div class="tree-node"><strong>Think</strong>Is it kind, private, legal, and on topic?</div>
        <div class="tree-node"><strong>Act</strong>Post respectfully, report harm, or ask for help.</div>
      </div>
    `;
  }

  if (type === "maintenance") {
    return `
      <div class="cycle-diagram" aria-label="Computer maintenance cycle">
        ${[
          ["Update", "Fix bugs and security issues"],
          ["Clean up", "Remove unnecessary files"],
          ["Back up", "Protect important work"],
          ["Dust safely", "Support cooling"],
          ["Startup", "Reduce boot time"]
        ]
          .map((item) => `<div class="cycle-node">${item[0]}<small>${item[1]}</small></div>`)
          .join("")}
      </div>
    `;
  }

  if (type === "io") {
    return `
      <div class="io-diagram" aria-label="Input processing output diagram">
        <div class="io-stack">
          ${["Keyboard", "Mouse", "Scanner", "Microphone", "Webcam"].map((item) => `<div class="io-node">${item}<small>Input</small></div>`).join("")}
        </div>
        <div class="io-node io-core">Computer processing<small>Data is handled inside the system</small></div>
        <div class="io-stack">
          ${["Monitor", "Printer", "Speakers", "Projector", "Headphones"].map((item) => `<div class="io-node">${item}<small>Output</small></div>`).join("")}
        </div>
      </div>
    `;
  }

  if (type === "safety") {
    return `
      <div class="safety-grid" aria-label="Computer lab safety diagram">
        ${[
          ["Walk", "Prevents falls"],
          ["Dry hands", "Reduces electrical danger"],
          ["No food", "Prevents spills and damage"],
          ["Clear floor", "Prevents trips"],
          ["Report damage", "Keeps everyone safe"]
        ]
          .map((item) => `<div class="safety-node">${item[0]}<small>${item[1]}</small></div>`)
          .join("")}
      </div>
    `;
  }

  if (type === "exam") {
    return `
      <div class="exam-map" aria-label="Exam section map">
        ${[
          ["Section 1", "Multiple choice", "30 marks"],
          ["Section 2", "Short answers", "50 marks"],
          ["Section 3", "Storage matching", "5 marks"],
          ["Section 4", "True or false", "15 marks"]
        ]
          .map((item) => `<div class="exam-section"><h4>${item[0]}</h4><p>${item[1]}</p><strong>${item[2]}</strong></div>`)
          .join("")}
      </div>
    `;
  }

  return `
    <div class="flow-diagram" aria-label="Final practice routine diagram">
      ${["Answer", "Explain", "Correct", "Mark review", "Retry"].map((step) => `<div class="flow-node">${step}</div>`).join("")}
    </div>
  `;
}

function renderSideQuiz(module) {
  const index = state.quizIndex[module.slug] || 0;
  const question = module.quiz[index % module.quiz.length];
  refs.sideQuiz.innerHTML = renderQuizCard(module, question, index % module.quiz.length, "side");
  attachQuizEvents(refs.sideQuiz, module);
}

function renderQuizCard(module, question, index, variant) {
  const id = answerId(module.slug, index);
  const saved = state.answers[id];
  const answered = typeof saved?.selected === "number";
  const correct = saved?.selected === question.answer;
  const options = question.options
    .map((option, optionIndex) => {
      let className = "";
      if (answered && optionIndex === question.answer) className = " is-correct";
      if (answered && optionIndex === saved.selected && optionIndex !== question.answer) className = " is-wrong";
      if (answered && optionIndex !== saved.selected && optionIndex !== question.answer) className = " is-muted";
      return `<button class="answer-button${className}" type="button" data-question="${index}" data-option="${optionIndex}" ${answered ? "aria-disabled=\"true\"" : ""}>${escapeHtml(option)}</button>`;
    })
    .join("");

  const label = variant === "side" ? `Question ${index + 1} of ${module.quiz.length}` : `${module.title} question ${index + 1}`;
  const nextButton = variant === "side"
    ? `<button class="small-button" type="button" data-next="${module.slug}">Next</button>`
    : "";

  return `
    <section class="quiz-card" data-card-question="${index}">
      <div class="quiz-topline">
        <span>${escapeHtml(label)}</span>
        <span>${answered ? (correct ? "Correct" : "Review") : "Try it"}</span>
      </div>
      <p class="quiz-question">${escapeHtml(question.prompt)}</p>
      <div class="answer-list">${options}</div>
      <div class="feedback ${answered ? "is-visible" : ""}">
        <strong>${answered ? (correct ? "Nice work." : "Check this one.") : "Explanation"}</strong>
        ${answered ? escapeHtml(question.explanation) : ""}
      </div>
      <div class="quiz-actions">
        ${nextButton}
        ${answered ? `<button class="small-button" type="button" data-retry="${index}">Retry</button>` : ""}
      </div>
    </section>
  `;
}

function attachQuizEvents(root, module) {
  root.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => {
      const questionIndex = Number(button.dataset.question);
      const optionIndex = Number(button.dataset.option);
      const id = answerId(module.slug, questionIndex);
      if (state.answers[id]?.locked) return;
      state.answers[id] = { selected: optionIndex, locked: true };
      render();
    });
  });

  root.querySelectorAll("[data-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const current = state.quizIndex[module.slug] || 0;
      state.quizIndex[module.slug] = (current + 1) % module.quiz.length;
      render();
    });
  });

  root.querySelectorAll("[data-retry]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionIndex = Number(button.dataset.retry);
      delete state.answers[answerId(module.slug, questionIndex)];
      render();
    });
  });
}

function attachShortAnswerEvents(module) {
  const select = document.querySelector("#shortPromptSelect");
  const draft = document.querySelector("#shortDraft");
  const showSample = document.querySelector("#showSample");
  const clearDraft = document.querySelector("#clearDraft");
  const sample = document.querySelector("#sampleAnswer");

  select?.addEventListener("change", () => {
    state.shortPromptIndex = state.shortPromptIndex || {};
    state.shortPromptIndex[module.slug] = Number(select.value);
    render();
  });

  showSample?.addEventListener("click", () => {
    sample.classList.toggle("is-visible");
    showSample.textContent = sample.classList.contains("is-visible") ? "Hide sample" : "Show sample";
  });

  clearDraft?.addEventListener("click", () => {
    draft.value = "";
    draft.focus();
  });

  document.querySelectorAll("[data-check]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const promptIndex = state.shortPromptIndex?.[module.slug] || 0;
      const key = `${module.slug}:${promptIndex}`;
      const selected = Array.from(document.querySelectorAll("[data-check]:checked")).map((item) => Number(item.dataset.check));
      state.shortChecks[key] = selected;
      saveState();
      renderProgress();
    });
  });
}

function renderConfidence(module) {
  const labels = [
    ["low", "Need help"],
    ["medium", "Getting there"],
    ["high", "Ready"]
  ];
  refs.confidenceOptions.innerHTML = labels
    .map(([value, label]) => `
      <button class="confidence-button ${state.confidence[module.slug] === value ? "is-active" : ""}" type="button" data-confidence="${value}">
        ${label}
      </button>
    `)
    .join("");

  refs.confidenceOptions.querySelectorAll(".confidence-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.confidence[module.slug] = button.dataset.confidence;
      render();
    });
  });
}

function renderTargets(module) {
  const score = moduleScore(module);
  const targets = [];
  if (score.correct < score.total) targets.push("Retry missed quiz items.");
  if (!state.confidence[module.slug]) targets.push("Set a confidence rating.");
  if (state.review[module.slug]) targets.push("Review this topic before final practice.");
  if (targets.length === 0) targets.push("Keep this topic warm with one mixed question later.");
  refs.targetList.innerHTML = targets.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderProgress() {
  const totals = modules.reduce(
    (acc, module) => {
      const score = moduleScore(module);
      acc.correct += score.correct;
      acc.total += score.total;
      return acc;
    },
    { correct: 0, total: 0 }
  );
  const confidenceValues = Object.values(state.confidence);
  const reviewCount = Object.values(state.review).filter(Boolean).length;
  const quizPercent = totals.total ? totals.correct / totals.total : 0;
  const confidencePercent = modules.length ? confidenceValues.length / modules.length : 0;
  const overall = Math.round(((quizPercent * 0.78) + (confidencePercent * 0.22)) * 100);
  refs.overallPercent.textContent = `${overall}%`;
  refs.overallMeter.style.width = `${overall}%`;
  refs.correctCount.textContent = `${totals.correct}/${totals.total}`;
  refs.reviewCount.textContent = String(reviewCount);
  refs.confidenceLabel.textContent = `${confidenceValues.length}/${modules.length}`;
}

function moduleScore(module) {
  return module.quiz.reduce(
    (acc, question, index) => {
      const saved = state.answers[answerId(module.slug, index)];
      if (saved?.selected === question.answer) acc.correct += 1;
      acc.total += 1;
      return acc;
    },
    { correct: 0, total: module.quiz.length }
  );
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.tab = button.dataset.tab;
    render();
    refs.lessonPanel.focus();
  });
});

refs.markReview.addEventListener("click", () => {
  const module = activeModule();
  state.review[module.slug] = !state.review[module.slug];
  render();
});

refs.resetProgress.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  render();
});

render();
