/*
function ProcGen()

	--cellularism
	if TimeChecker%60 == 0  and ViralImpact then
		GameOfCorruption()

	end

	--when 10 seconds is over
	if Seconds == 10 then
	Seconds = 0

	if (not MainMenu and not TheEnd and not IntroActive) or IngameChecker == 6000 then
	IngameChecker = 0
	end

	RoundCounter = RoundCounter + 1

	--empty map
		for j=1,24 do
			for i=1,24 do
				Map[j][i] = 1
			end
		end

	-- creating a new one

	GenerateBrandNewLevel()

	-- sound
		if 	IntroActive == false then

			love.audio.play(SoundSet[6])
			if not SoundSet[6]:isStopped()
			then
				if TimeChecker%1==0 then
					SoundSet[6]:rewind()
				end
			end

		end
	end
end
*/
function generateBrandNewLevel(){

	//empty map and its variables in 2 steps:

  //1: add layer (PhaserJS feature)
  if(typeof layer != "object"){
    layer = map.create('level', mapsize, mapsize, tilesize, tilesize);
    layer.resizeWorld();
    drawable.add(layer);
  }

  //2: upload tilemap
  for(i=0;i<map.width;i++){
      for(j=0;j<map.height;j++){

          map.putTile(1, i, j, layer);

      };
  };

  if (roundCounter == 0){
    terminalsVisited = 0;
    loggedAmount = 0;
  }


/*
	-- level generating codes for each difficulty

	--1.: firewall, logpoint, no basic antivirus (no terminal, dynamic firewall or virus slots)
	if Difficulty == 1 then

		ViralImpact = false
		HasDynamic = false

		if RoundCounter == 0 then
			TerminalCondition = 0
		end

		LogPointAmount = 90
		AntivirusAmount = 1
		FirewallAmount = 30
	end

	--2: more firewall, and logpoint, no basic antivirus (no terminal, dynamic firewall or virus slots)
	if Difficulty == 2 then

		ViralImpact = false
		HasDynamic = false

		if RoundCounter == 0 then
			TerminalCondition = 0
		end

		LogPointAmount = 120
		AntivirusAmount = 1
		FirewallAmount = 75
	end

	--3: a lot of firewalls, same amount of logpoints, basic antivirus, 2 terminals to visit(no dynamic firewall or virus slots)
	if Difficulty == 3 then

		ViralImpact = false
		HasDynamic = false

		if RoundCounter == 0 then
			TerminalCondition = 2
		end

		LogPointAmount = 120
		AntivirusAmount = 10
		FirewallAmount = 100
	end

	--4: even more firewalls, more logpoints, basic antivirus, 3 terminals to visit(no dynamic firewall or virus slots)
	if Difficulty == 4 then

		ViralImpact = false
		HasDynamic = false

		if RoundCounter == 0 then
			TerminalCondition = 3
		end

		LogPointAmount = 150
		AntivirusAmount = 10
		FirewallAmount = 120
	end

	--5: maxfirewalls, less logpoints, more antivirus, 4 terminals to visit, dynamic firewall (no virus slots)
	if Difficulty == 5 then

		ViralImpact = false
		HasDynamic = true

		if RoundCounter == 0 then
			TerminalCondition = 4
		end

		LogPointAmount = 50
		AntivirusAmount = 30
		FirewallAmount = 140
	end

	--6:  ANTIVIRUS CHALLANGE: no firewalls, no logpoints, lotsa antivirus, 4 terminals to visit, no dynamic firewall (no virus slots)
	if Difficulty == 6 then

		ViralImpact = false
		HasDynamic = false

		if RoundCounter == 0 then
			TerminalCondition = 4
		end

		LogPointAmount = 0
		AntivirusAmount = 300
		FirewallAmount = 0
	end

	--7: GRIDLOCK: lotsa firewalls, a bit more logpoints, less basic antivirus, 4 terminals to visit, no dynamic firewall,virus slots
	if Difficulty == 7 then

		ViralImpact = true
		HasDynamic = false

		if RoundCounter == 0 then
			TerminalCondition = 4
		end

		LogPointAmount = 10
		AntivirusAmount = 10
		FirewallAmount = 300
	end

	--8: TERMINAL HUNTER: lessfirewalls, average logpoints, few basic antivirus, 8 terminals to visit, dynamic firewall, virus slots
	if Difficulty == 8 then

		ViralImpact = true
		HasDynamic = true

		if RoundCounter == 0 then
			TerminalCondition = 12
		end

		LogPointAmount = 150
		AntivirusAmount = 10
		FirewallAmount = 100
	end

	--9: VIRUS FIELD: a bit more firewalls, less logpoints, lot of antivirus, 6 terminals to visit, dynamic firewall, virus slots
	if Difficulty == 9 then

		ViralImpact = true
		HasDynamic = true

		if RoundCounter == 0 then
			TerminalCondition = 6
		end

		LogPointAmount = 30
		AntivirusAmount = 80
		FirewallAmount = 100
	end

	--10: FINAL CHALLANGE: a bit more firewalls, several logpoints, lot of antivirus, 20 terminals to visit, dynamic firewall, virus slots
	if Difficulty == 10 then

		ViralImpact = true
		HasDynamic = true

		if RoundCounter == 0 then
			TerminalCondition = 20
		end

		LogPointAmount = 200
		AntivirusAmount = 10
		FirewallAmount = 150
	end


		--exit
		Dynamic_X = math.random(24)
		Dynamic_Y = math.random(24)
		randX = math.random(24)
		randY = math.random(24)

		Map[randX][randY] = 5

		--viral blocks
		if ViralImpact then
			for k=1, 5 do
				while Map[randX][randY] ~= 1 or (randX == MeOnField_X and randY == MeOnField_Y) do
					randX = math.random(24)
					randY = math.random(24)
				end
			end

			Map[randX][randY] = 8
		end

		-- dynamic firewall
		if HasDynamic then
			while Map[Dynamic_X][Dynamic_Y] ~= 1 or (Dynamic_X == MeOnField_X and Dynamic_Y == MeOnField_Y) do
				Dynamic_X = math.random(24)
				Dynamic_Y = math.random(24)
			end

		FirewallFill()
		FirewallClean()

		-- charge dynamic firewall
		FirewallCharge()

		Map[Dynamic_X][Dynamic_Y] = 7

		end



		-- terminals (visit them first to leave)
		for k=1,TerminalCondition-TerminalsVisited do

			while Map[randX][randY] ~= 1 or (randX == MeOnField_X and randY == MeOnField_Y) do
				randX = math.random(24)
				randY = math.random(24)
			end

			Map[randX][randY] = 6
		end

		--antivirus scanfield
		for k=1,LoggedAmount+AntivirusAmount do

			while Map[randX][randY] ~= 1 or (randX == MeOnField_X and randY == MeOnField_Y) do
				randX = math.random(24)
				randY = math.random(24)
			end

			Map[randX][randY] = 4
		end

		-- firewalls
		for k=1,FirewallAmount do

			while Map[randX][randY] ~= 1 or (randX == MeOnField_X and randY == MeOnField_Y) do
				randX = math.random(24)
				randY = math.random(24)
			end

			Map[randX][randY] = 2
		end

		-- logpoints (the more occasions you have detected, the less they are appearing
		for k=1,LogPointAmount-LoggedAmount do

			while Map[randX][randY] ~= 1 or (randX == MeOnField_X and randY == MeOnField_Y) do
				randX = math.random(24)
				randY = math.random(24)
			end

			Map[randX][randY] = 3
		end
    */
}
