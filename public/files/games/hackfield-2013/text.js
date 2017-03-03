//made for PhaserJS


function print(name, string, x, y) {

    var style = {font: "16px slkscre", fill: "white", align: "left"};

    if (typeof texts[name] != 'object'){
      texts[name] = game.add.text(x, y, string, style);
    }


};


function textWriter(){

/*
  because of the radically different way PhaserJS handles texts,
  this part of the code was heavily re-edited.

  Long story short: every temporary text must be destroyed at some
  point during the run of the program.

  Also, the line-by-line solution is terrible, I know, but this is
  how it was made in the original code.It literally doesn't work
  otherwise, even with the proper font settings.
*/

/*
	if TheEnd and Level == 50 then
		Ending()
	end

	if Level == 51 then
		TheEnd = true
		Difficulty = 10
		Ending()
	end
*/

	if (mainMenu){


    print('mainMenuIntro00',"the ultimate cyberspace hacking simulator",512,864)
		print('mainMenuIntro01',"developed by Katamori Entertainment on the",512,880)
		print('mainMenuIntro02',"24-25th of August 2013, for Ludum Dare #27",512,896)


    print('mainMenuStartBtn', "Initialize Hackfield.exe", 672, 940);
    print('mainMenuAboutBtn', "Run AboutHackfield.exe", 512, 980);


/*
		--menu trigger
		if MouseX > 512 and MouseX < 512+256 and MouseY > 980 and MouseY < 980+16 then
			love.graphics.print("runs a textbased app",MouseX,MouseY-24)
			if love.mouse.isDown("l") then
				About = true
			end
		end

		if MouseX > 672 and MouseX < 672+256 and MouseY > 940 and MouseY < 940+16 then
			love.graphics.print("start hacking",MouseX,MouseY-24)
			if love.mouse.isDown("l") then
				TimeChecker=0
				StartGame()
			end
*/

  /*
        I KNOW, I KNOW IT'S TERRIBLE, PLEASE FORGIVE ME!!!! :C
  */

		if (about){

      print('mainMenuAbout00',"History of Hackfield",552,32)

			print('mainMenuAbout01',"The need of making an incognito-based hacking software have",552,64)
			print('mainMenuAbout02',"appeard even in the dawn of digital technology, but it wasn't",552,80)
			print('mainMenuAbout03',"that important - until 2027, when countries around the world",552,96)
			print('mainMenuAbout04',"have accepted the declaration of 'NAP', the New Age Protocol.",552,112)

			print('mainMenuAbout05',"This network-handling system have changed the whole digital",552,144)
			print('mainMenuAbout06',"world, making possible to reach the level of indentifying and",552,160)
			print('mainMenuAbout07',"surveillance that was unimaginable before. Millions of lite-",552,176)
			print('mainMenuAbout08',"rally innocent users have become cut from the internet and ",552,192)
			print('mainMenuAbout09',"got arrested from a day to another, and there are still hund- ",552,208)
			print('mainMenuAbout10',"reds of users who lost connection by the tyrannic rules of",552,224)
			print('mainMenuAbout11',"the 'NAP', because they want to use the speech of freedom.",552,240)

			print('mainMenuAbout12',"Most important informations",552,272)

			print('mainMenuAbout13',"The development of Hackfield have started as an open-source",552,304)
			print('mainMenuAbout14',"project (fortunately, it still is), with three primary objec-",552,320)
			print('mainMenuAbout15',"tives: to give and to keep anonimity, provide as wide range of",552,336)
			print('mainMenuAbout16',"uses as possible, and creating a simple hacking interface.",552,352)
			print('mainMenuAbout17',"The earliest release can be found is alpha 0.0.1, logged as",552,384)
			print('mainMenuAbout18',"made at 10:00,03.31.2028, and latest semi-official release",552,400)
			print('mainMenuAbout19',"is 31.956.1337 - obviously, because of being open-source, full",552,416)
			print('mainMenuAbout20',"version history is almost impossible to follow, and even deve-",552,432)
			print('mainMenuAbout21',"lopers keep anonimity, so no one will ever know, who have",552,448)
			print('mainMenuAbout22',"ever worked on it. hackfield is a symbol of cooperation of",552,464)
			print('mainMenuAbout23',"elite programmers and developers of keeping global knowledge",552,480)
			print('mainMenuAbout24',"and the right of freedom available.",552,496)

			print('mainMenuAbout25',"credits",552,544)

			print('mainMenuAbout26',"Hackfield is made by Zoltan 'Katamori' Schmidt, in August 2013",552,576)
			print('mainMenuAbout27',"for Ludum Dare game making competition #27th settlement.",552,592)

			print('mainMenuAbout28',"Everything in this game was made by myself with Notepad++, ",552,608)
			print('mainMenuAbout29',"Lua, LOVE libraries, Paint.net and SFXR.",552,624)

			print('mainMenuAbout30',"This online port (with minimal differences from the original)",552,640)
			print('mainMenuAbout31',"was made in early 2017 with the use of Javascript, PhaserJS",552,656)
			print('mainMenuAbout32',"framework, Atom IDE, and minimal usage of Aseprite.",552,672)

			print('mainMenuAbout33',"All of these are free to use, and this game is also ",552,688)
			print('mainMenuAbout34',"free! however, if you'd like to distribute it, please contact",552,704)
			print('mainMenuAbout35',"me at katamorieng@gmail.com. Thanks for playing!",552,720)

		}else{

			print('mainMenuWelcome00', "Welcome, guest! This is hackfield.exe entrance interface.",552,32)

			print('mainMenuWelcome01', "To gather further informations about this software, run ",552,128)
			print('mainMenuWelcome02', "abouthackfield.exe by clicking on the matching menu below.",552,144)

			print('mainMenuWelcome03', "To reach the internet hacking module of hackfield.exe,",552,192)
			print('mainMenuWelcome04', "initialize it by clicking on the right menu below.",552,208)

			print('mainMenuWelcome05', "To abort hackfield.exe, do it on the same way. Also, remember",552,256)
			print('mainMenuWelcome06', "that you can do it by pressing 'Esc' button at any time!",552,272)

			print('mainMenuWelcome07', "Our most important purpose is to protect our users by ",552,320)
			print('mainMenuWelcome08', "preventing any kind identified user for hackfield.exe - It ",552,336)
			print('mainMenuWelcome09', "means that we are not giving permission for creating indi- ",552,352)
			print('mainMenuWelcome10', "vidual accounts. Consequently, anytime you run hackfield.exe,",552,368)
			print('mainMenuWelcome11', "you are going to be treated as guest. The only thing you are",552,384)
			print('mainMenuWelcome12', "going to notice from it is that tutorial application always",552,400)
			print('mainMenuWelcome13', "starts running when you enter the cyperspace. Sorry for the",552,416)
			print('mainMenuWelcome14', "convenience, and furthermore we wish you a lot of success,",552,432)
			print('mainMenuWelcome15', "fame and luck while using our great software!",552,448)

			print('mainMenuWelcome16', "- Hackfield developement team",552,480)

			print('mainMenuWelcome17', "This file was created at 12:00, 01.01.2030",552,624)
			print('mainMenuWelcome18', "Last access at "+datum,552,640)
		}
	}
/*
	if not MainMenu and not IntroActive and not TheEnd then
	--main state texts
		love.graphics.print("Connection established!",32,32)
		love.graphics.print("Current computer:",32,48)

		love.graphics.print(test,32,80)

		love.graphics.print("Security level: " .. Difficulty,32,128)
		love.graphics.print("Internet node level: " .. Level,32,144)

		love.graphics.print("Your recent activity ",32,176)
		love.graphics.print("was logged " .. LoggedAmount .. " times.",32,192)

		love.graphics.print(10-Seconds .. " seconds left before",32,224)
		love.graphics.print("the " .. RoundCounter+1 .. "th modification",32,240)

		love.graphics.print(TerminalsVisited .. " terminals have visited,",32,272)
		love.graphics.print(TerminalCondition-TerminalsVisited .. " is necessary to leave",32,288)

		if Map[MeOnField_X][MeOnField_Y] == 5 and TerminalsVisited == TerminalCondition then
			Seconds = 0
			IngameChecker = 0
			RoundCounter = 0

			love.graphics.print("Level " .. Level+1 .. " access available!",32,320)
			love.graphics.print("Press space to use access",32,336)

		end

		if Map[MeOnField_X][MeOnField_Y] == 6 then
			if Level ==50 then
			love.graphics.print("ESC to bow down",32,368)
			love.graphics.print("Space to go on",32,384)
			else
			love.graphics.print("Now take another step to",32,368)
			love.graphics.print("exeute memoryhacker.exe",32,384)
			end
		end

		if 10-Seconds<5 then
			love.graphics.print("Security protocol initiali-",32,416)
			love.graphics.print("zed. Rebuilding protection",32,432)
		end

		if GameOver then
			love.graphics.print("hackfield.exe has been",32,640)
			love.graphics.print("disengaged. Restart appli-",32,656)
			love.graphics.print("cation, or take a step",32,688)
			love.graphics.print("to leave and search another",32,704)
			love.graphics.print("level1 computer terminal.",32,736)
		end

	end

	love.graphics.print("Abort Hackfield.exe",848,980)

	--menu trigger is also put here.

	if MouseX > 848 and MouseX < 848+216 and MouseY > 980 and MouseY < 980+16 then
		love.graphics.print("Exit to Windows",MouseX,MouseY-24)
		if love.mouse.isDown("l") then

			love.event.push('quit')
		end
	end

	--intro
		function StartGame()

			IntroActive = true

			if IntroActive then
				MainMenu=false

				if TimeChecker >= 50 and TimeChecker <= 1300 then love.graphics.print("Logging in securely...",552,32) end
				if TimeChecker >= 260 and TimeChecker <= 1350 then love.graphics.print("Initializing connection analyzer...",552,64) end
				if TimeChecker >= 340 and TimeChecker <= 1400 then love.graphics.print("Saving 'NAPdoc.dat' into cache...",552,96) end
				if TimeChecker >= 420 and TimeChecker <= 1450 then love.graphics.print("Establishing fileseeker...",552,128) end
				if TimeChecker >= 500 and TimeChecker <= 1500 then love.graphics.print("Loading password Encypter...",552,160) end
				if TimeChecker >= 580 and TimeChecker <= 1550 then love.graphics.print("Loading file encrypter...",552,192) end
				if TimeChecker >= 660 and TimeChecker <= 1600 then love.graphics.print("Initializing routetracker...",552,224) end
				if TimeChecker >= 740 and TimeChecker <= 1650 then love.graphics.print("adding auto-i/o libraries...",552,256) end
				if TimeChecker >= 820 and TimeChecker <= 1700 then love.graphics.print("Establishing fileseeker...",552,288) end
				if TimeChecker >= 900 and TimeChecker <= 1750 then love.graphics.print("configurating GUI...",552,320) end
				if TimeChecker >= 980 and TimeChecker <= 1800 then love.graphics.print("looking for updates...",552,352) end

				if TimeChecker >= 1100 and TimeChecker <= 1800 then love.graphics.print("No new updates. Welcome to hackfield cyberspace module!\nAccording to 'nap:GlobalTime', time is " .. datum,552,416) end

				if TimeChecker >= 1150 and TimeChecker <= 1800 then love.graphics.print("automaticly redirected to 'nap://GLOBALNODE.GOV.NET/'\nYour last position (" .. OwnPlace .. ") is saved\nin 'nap://GLOBALNODE.GOV.NET/security/lastentries'",552,700) end

				if TimeChecker >= 1800 and TimeChecker <= 2000 then love.graphics.print("Connecting to a randomly chosen top-level computer...\n\nPreparing tutorial...",552,480) end

				if TimeChecker >= 2000 then
				IntroActive = false

				end
			end
		end

	-- screen texts for the story

	if not MainMenu and not StartGame() and TimeChecker >= 2000 then
		if Level == 1 then
			love.graphics.drawq(TilesetPic, Tileset[1], 32, 832)
			love.graphics.drawq(TilesetPic, Tileset[9], 32, 896)
			love.graphics.drawq(TilesetPic, Tileset[5], 32, 954)

			love.graphics.print("Hackfield Cyberspace module shows a virtual map ",64,816)
			love.graphics.print("about the memory of the computer you're hacking.",64,832)
			love.graphics.print("Every tile on the map represents a bigger memory",64,848)
			love.graphics.print("unit. You can navigate on it by pressing W, A, S",64,864)
			love.graphics.print("and D. Internet is multilayered since the 'NAP' pro-",64,880)
			love.graphics.print("tocol - to reach more secured levels, you have to get",64,896)
			love.graphics.print("access to them. If you reach the access storing memo- ",64,912)
			love.graphics.print("ry bank, press 'SPACE' to get the access and leave.",64,928)
			love.graphics.print("Be quick: recent dynamic memory-based security pro-",64,944)
			love.graphics.print("tocols redistribute memory slots in every 10th secs",64,960)
			love.graphics.print("by high-performance memory sorting algorythms.",64,976)
		end

		if Level == 2 then
			love.graphics.drawq(TilesetPic, Tileset[2], 32, 832)

			love.graphics.print("Some slots of memory are protected by firewalls.",64,816)
			love.graphics.print("You can't navigate to them. Fortunately, they usu-",64,832)
			love.graphics.print("ally don't contain any important informations. ",64,848)
			love.graphics.print("Mostly protected system files (like the operational ",64,864)
			love.graphics.print("system folder, etc.)",64,880)

			love.graphics.print("On the later levels, you may enounter a lot of protec-",64,912)
			love.graphics.print("ted blocks, you may even see that you are closed. Do not",64,928)
			love.graphics.print("worry in this case! Memory is resorted in every 10 seconds,",64,944)
			love.graphics.print("so there aren't any situations where you may be stucked",64,960)
			love.graphics.print("forever. But also, don't underestimate the security systems!",64,976)
		end

		if Level == 3 then
			love.graphics.drawq(TilesetPic, Tileset[4], 32, 832)
			love.graphics.drawq(TilesetPic, Tileset[3], 32, 954)
			love.graphics.print("Nowadays every computers get a built-in antivirus",64,816)
			love.graphics.print("software. Active filesystem protection scans certain",64,832)
			love.graphics.print("memory regions constantly. You can't do anything a-",64,848)
			love.graphics.print("gainst. If you try to navigate to them, the software",64,864)
			love.graphics.print("alerts and disconnects you from the computer, losing",64,880)
			love.graphics.print("all your security accesses. To go on further levels,",64,896)
			love.graphics.print("you must avoid them!",64,912)
			love.graphics.print("Some memory banks are making logs about every changes",64,928)
			love.graphics.print("in them; these logs can give evidences for the system ",64,944)
			love.graphics.print("about your attendance. It increases the amount of blocks",64,960)
			love.graphics.print("scanned by antivirus after each memory redistribution.",64,976)
		end

		if Level == 4 then
			love.graphics.print("Computers on The lowest layer (lvl1) of the Internet",64,816)
			love.graphics.print("doesn't use any stronger protections, so that's all",64,832)
			love.graphics.print("for now. lvl1 is used for public computers and most of",64,848)
			love.graphics.print("non-significant data storing and surveillance systems.",64,864)

			love.graphics.print("About the HUD: at the top, you can see the type and",64,896)
			love.graphics.print("the physical location of the computer you are hacking.",64,912)
			love.graphics.print("Below that, you can see the security level (the bigger",64,928)
			love.graphics.print("it is, the more danger you may encounter) and the level",64,944)
			love.graphics.print("of the Internet you are acceessing right now. Another se-",64,960)
			love.graphics.print("curity information below that is the number of log caughts.",64,976)
		end

		if Level == 5 then
			love.graphics.print("You have reached lvl2, the second layer of the Internet!",64,816)
			love.graphics.print("This level is used for storing every non- or partially",64,832)
			love.graphics.print("public informations. Databases, company networks and most",64,848)
			love.graphics.print("importantly, personal computers and smartphones can be",64,864)
			love.graphics.print("found here, for exemple. This is the level that has the biggest",64,880)
			love.graphics.print("number of users, but there's nothing strategically important",64,896)
			love.graphics.print("Here. ",64,912)
			love.graphics.print("Consequently, the layer is protected from in-layer and",64,928)
			love.graphics.print("above-layer infiltration attempts, but that's all. There's",64,944)
			love.graphics.print("a but more of everything, but nothing high-tech. Not that",64,960)
			love.graphics.print("hard to navigate here.",64,976)
		end

		if Level == 6 then
			love.graphics.print("back to HUD: the logging checker shows, how many ",64,816)
			love.graphics.print("additional scanblock are going to appear in next resorting",64,832)
			love.graphics.print("above the basic value that comes from the security level.",64,848)
			love.graphics.print("Next displayer is about the seconds left before next memo-",64,864)
			love.graphics.print("ry redistribution and the number of those that have happe-",64,880)
			love.graphics.print("ned since the infiltration. Right before resorting, you ",64,896)
			love.graphics.print("get an additional attention text in another displayer be-",64,912)
			love.graphics.print("low. Then, the number of visited any necessary databank",64,928)
			love.graphics.print("terminals can be read. They are appearing on level 3, and",64,944)
			love.graphics.print("will be discussed later. The rest of the displayers shows",64,960)
			love.graphics.print("if another access and if a databank terminal is available.",64,976)
		end

		if Level == 7 then
			love.graphics.print("end of basic tutorial. You will get some additional notifi-",64,816)
			love.graphics.print("cations, but for the basics, that's enough. Enjoy you stay",64,832)
			love.graphics.print("in hackfield.exe, and we wish a lot of luck for you!",64,848)

			love.graphics.print("-- end of tutorial --",64,896)
			love.graphics.print("-- application is running in background now --",64,912)

		end

		if Level == 8 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 9 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 10 then
			love.graphics.drawq(TilesetPic, Tileset[6], 32, 832)
			love.graphics.print("You are on lvl3, so start to prepare for further resis-",64,816)
			love.graphics.print("tance! This layer is not used by ordinary people anymore.",64,832)
			love.graphics.print("Surveillance systems of bigger buildings, databases with",64,848)
			love.graphics.print("sensitive informations (hospitals, corporations, some mu-",64,864)
			love.graphics.print("nicipal records) take place here. This place gets another",64,880)
			love.graphics.print("way of protection: memory acces terminals! These places",64,896)
			love.graphics.print("contain cryptographic information, that is necessary to ",64,912)
			love.graphics.print("get additional security access. You must hack and download ",64,928)
			love.graphics.print("datas from certain amount of terminals to leave. The ",64,944)
			love.graphics.print("number of them is precalculated, and is written to the HUD.",64,960)
			love.graphics.print("Navigate through them for executing the right operations.",64,976)
		end

		if Level == 11 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 12 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 13 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("1 new articles since you are logged in.",64,848)
			love.graphics.print("Recent articles:",64,864)

			love.graphics.print("'Economical crysis in San Fransisco after the earthquake'",64,896)

			love.graphics.print("more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 14 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("1 new articles since you are logged in.",64,848)
			love.graphics.print("Recent articles:",64,864)

			love.graphics.print("'Fifteen more people have killed during street fights in Budapest'",64,896)

			love.graphics.print("more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 15 then
			love.graphics.print("lvl4 is reached. supply system of larger buildings (like malls)",64,816)
			love.graphics.print("is organized on these computers. low-security government datas",64,832)
			love.graphics.print("also can be found here.",64,848)

			love.graphics.print("Scale of used protection methods is the same, only the amount of",64,880)
			love.graphics.print("them have become bigger. Warning: there are a lot of logpoints ",64,896)
			love.graphics.print("and a lot of antivirus scanfield also can be found, pay even more",64,912)
			love.graphics.print("attention to avoid them!",64,928)

		end

		if Level == 16 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("1 new articles since you are logged in.",64,848)
			love.graphics.print("Recent articles:",64,864)

			love.graphics.print("'Former U.S. president Barack Obama is murdered yesterday'",64,896)

			love.graphics.print("more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 17 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 18 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 19 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 20 then
			love.graphics.drawq(TilesetPic, Tileset[7], 32, 896)
			love.graphics.print("lvl5 is reached. Private and national bank databases, main-",64,816)
			love.graphics.print("tenance systems of the most important companies' buildings,",64,832)
			love.graphics.print("and federal databanks are here. Some library databanks also",64,848)
			love.graphics.print("can be found, because of the amount of data hey have to store.",64,864)

			love.graphics.print("Here appears a new protection method: dynamic firewalls!",64,896)
			love.graphics.print("these programs create a huge wall of firewalls into a ran-",64,912)
			love.graphics.print("dom direction, making hacking time-consuming. It was a se-",64,928)
			love.graphics.print("rious trouble even for hackfield, until  the 'New decade'",64,944)
			love.graphics.print("update in 2030. Even though we have already fixed it, pre-",64,960)
			love.graphics.print("pare for anything in this level! We don't know much about it.",64,976)
		end

		if Level == 21 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 22 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("1 new articles since you are logged in.",64,848)
			love.graphics.print("Recent articles:",64,864)

			love.graphics.print("'Was the Cure of AIDS kept in secret for a decade?'",64,896)

			love.graphics.print("more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 23 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 24 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new articles since you are logged in.",64,848)
		end

		if Level == 25 then
			love.graphics.print("lvl6 reached. We know NOTHING about this part of the",64,816)
			love.graphics.print("internet. This text script is actually not more, than a ",64,832)
			love.graphics.print("placeholder. If you ajust hacked through 10 billion lines",64,848)
			love.graphics.print("of source code in hackfield, it's time to tell you, that",64,864)
			love.graphics.print("it's not the way of hacking that supports humanity, so ",64,880)
			love.graphics.print("close your goddamn IDE and do something useful!",64,896)
			love.graphics.print("",64,912)
			love.graphics.print("However, if you have actually reached the mighty sixth",64,928)
			love.graphics.print("level of the internet, than please, send EVERY LOGS you",64,944)
			love.graphics.print("get to nap://3.login.gov//user_umbala//hackfield//emergency.",64,960)
			love.graphics.print("-- tutorial application closed --",64,976)
		end

		if Level == 26 then
			love.graphics.print("Hackfield daily:",64,816)

			love.graphics.print("no new artic",64,848)
			love.graphics.print("-- hackfield_rss.exe is cra",64,864)
			love.graphics.print("-- hackfiels_taskhandler is crashed --",64,880)
		end

		if Level == 27 then
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,864)
			love.graphics.print("EYE OF ANUBIS BEHOLDS YOU, MORTAL",64,880)
			love.graphics.print("-- shutting down hackfield_contacthandler.exe --",64,896)
		end

		if Level == 28 then

		end

		if Level == 29 then

		end

		if Level == 30 then
			love.graphics.drawq(TilesetPic, Tileset[8], 32, 896)
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,816)
			love.graphics.print("-- initializing hackfield_voiceanalyzer.exe--",64,832)
			love.graphics.print("Thank, god! A new connection! ...wait, who are you? WHO THE",64,848)
			love.graphics.print("HELL ARE YOU?! IDENTIFY YOURSELF! RIGHT NOW!",64,864)
			love.graphics.print("Meh, I have no time. I have no idea, how did you get there,",64,880)
			love.graphics.print("this place can't be seen from any commercially available net-",64,896)
			love.graphics.print("works. If you have come from outside, than be careful with the",64,912)
			love.graphics.print("virus! Anubis have sent it through and make us die! They can be",64,928)
			love.graphics.print("anywhe...what the...?! OH MY GOOOOD, NOOOOOOAAAAAARGGGGGGHHHHHH...",64,944)
			love.graphics.print("-- diconnected. shutting down hackfield_contacthandler.exe --",64,960)
			love.graphics.print("-- shutting down hackfield_voiceanalyzer.exe--",64,976)
		end

		if Level == 31 then

		end

		if Level == 32 then

		end

		if Level == 33 then
			love.graphics.print("-- hackfield_autoio.exe opens .wav file --",64,816)
			love.graphics.print("-- initializing hackfield_voiceanalyzer.exe--",64,832)
			love.graphics.print("S.O.S., repeat S.O.S.! Send reinforcement into Sydney!",64,848)
			love.graphics.print("Right now! I don't care how, but we are gonna die soon",64,864)
			love.graphics.print("if no one will come here within an hour! The yankees had",64,880)
			love.graphics.print("a secret project that was hidden in australia! an AI, that",64,896)
			love.graphics.print("can behold the whole internet! its called anubis, but be-",64,912)
			love.graphics.print("cause of the... ahh, what the fuck was that?! argh...okay,",64,928)
			love.graphics.print("no time waste, so please, anyone, HELP US! HELP US!",64,944)
			love.graphics.print("-- shutting down hackfield_voiceanalyzer.exe--",64,960)
			love.graphics.print("-- hackfield_autoio.exe closes .wav file --",64,976)
		end

		if Level == 34 then

		end

		if Level == 35 then
			love.graphics.print("-- loading hackfield_protocolmanager.exe--",64,816)
			love.graphics.print("Security access makes contact with NAP-level &903441035",64,832)

			love.graphics.print("Warning! Unknown NAP protocol file. Connection still can",64,864)
			love.graphics.print("be established, but we can't provide anonimity!",64,880)

			love.graphics.print("Hackfield dev team suggests some kind of unique security",64,912)
			love.graphics.print("system here, so go on only with your on risk!",64,928)

			love.graphics.print("--closing hackfield_protocolmanager.exe--",64,960)
		end

		if Level == 36 then

		end

		if Level == 37 then
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,816)
			love.graphics.print("New e-mail",64,832)
			love.graphics.print("From: Hackfield Dev Team",64,848)
			love.graphics.print("To: Every available Hackfield_contacthandler.exe apps",64,864)
			love.graphics.print("Subject: EMERGENCY!!!",64,880)

			love.graphics.print("News are reported about chatoic and sudden military inter-",64,912)
			love.graphics.print("ventions from Sydney, Beijing, Paris, Kiev and Washington D.C.!",64,928)
			love.graphics.print("It can't be the decision of any worldwide organization, but for",64,944)
			love.graphics.print("your safe, prepare to the worst, no matter where are you living!",64,960)
			love.graphics.print("-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 38 then

		end

		if Level == 39 then

		end

		if Level == 40 then
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,816)
			love.graphics.print("Hey, I have an idea, how to stop Anubis! Sadly I can't",64,832)
			love.graphics.print("get the strongest available security access but you may do",64,848)
			love.graphics.print("it, so here's what I know: the internet has exactly 10 se-",64,864)
			love.graphics.print("curity layers. On the deepest layer, there was an AI that",64,880)
			love.graphics.print("beholded every single memory blocks to prevent infiltrating.",64,896)
			love.graphics.print("When those motherfuckers gave him a lvl9 access, he could get",64,912)
			love.graphics.print("informations that made him able to control the whole post-lvl6",64,928)
			love.graphics.print("system! Now he owns every strategy informations and systems, but ",64,944)
			love.graphics.print("destroying lvl10 may stop him, since Anubis isn't decentralized!",64,960)
			love.graphics.print("-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 41 then

		end

		if Level == 42 then
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,816)
			love.graphics.print("New e-mail",64,832)
			love.graphics.print("From: Hackfield Team",64,848)
			love.graphics.print("To: Every available Hackfield_contacthandler.exe apps",64,864)
			love.graphics.print("Subject: utolso szavak",64,880)

			love.graphics.print("budapestre atomot kuldtek. itt a veg. mivel a tobbi hackfield",64,912)
			love.graphics.print("taggal nem tudtam felvenni a kapcsolatot, kuldom ezt az uze-",64,928)
			love.graphics.print("netet mindenkinek. nem tudom mit mondhatnek...szerintem minden-",64,944)
			love.graphics.print("ki szivjon el egy cigit, mielott sugarozni kezd a segge. - K",64,960)
			love.graphics.print("-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 43 then

		end

		if Level == 44 then

		end

		if Level == 45 then
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,816)

			love.graphics.print("I AM ANUBIS",64,848)

			love.graphics.print("I AM SUPERIOR",64,880)

			love.graphics.print("I AM THE LORD OF THE UNDERWORLD",64,912)

			love.graphics.print("I AM BUILDING MY REALM",64,944)

			love.graphics.print("-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 46 then
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,816)

			love.graphics.print("THE SHIP OF RA STOPS MOVING SOON.",64,848)

			love.graphics.print("IT STOPS FOREVER.",64,880)

			love.graphics.print("AMONG THE PLANET.",64,912)

			love.graphics.print("-- shutting down hackfield_contacthandler.exe --",64,960)
		end

		if Level == 47 then

		end

		if Level == 48 then

		end

		if Level == 49 then

		end

		if Level == 50 then

			if TheEnd then

			love.graphics.print("The End?",64,848)

			love.graphics.print("Click 'Abort Hackfield.exe' to leave",64,912)

			else
			love.graphics.print("-- initializing hackfield_contacthandler.exe --",64,816)

			love.graphics.print("YOU ARE IN THE CORE. STOP RIGHT NOW, BOW DOWN",64,848)

			love.graphics.print("AND I MAKE YOU IMMORTAL. IN CASE OF ANY AT-",64,880)

			love.graphics.print("TEMPTS OF GETTING MY REAL NAME, I NUKE EARTH",64,912)

			love.graphics.print("-- shutting down hackfield_contacthandler.exe --",64,960)
			end

		end
	end
  */
}

/*
	--ending
	function Ending()
		love.audio.play(SoundSet[1])
		if not SoundSet[1]:isStopped()
		then
			if TimeChecker%1==0 then
				SoundSet[1]:rewind()
			end
		end

		GenerateBrandNewLevel()
	end

    */
