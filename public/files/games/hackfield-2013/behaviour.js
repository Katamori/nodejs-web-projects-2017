/*
--detecting "system"

function Physics(x)

	if x==4 or x==8 then
			love.audio.play(SoundSet[4])
			if not SoundSet[4]:isStopped()
			then
				if TimeChecker%1==0 then
					SoundSet[4]:rewind()
				end
			end
	end

	if x==2 or x==7 or TheEnd or MainMenu then
		return false

	else
		return true
	end
end

--logpoint: increasing antivirus appearance
	function LogPoint_Logging()
		if Map[MeOnField_X][MeOnField_Y] == 3 then
			LoggedAmount = LoggedAmount + 1
			Map[MeOnField_X][MeOnField_Y] = 1

			love.audio.play(SoundSet[3])
			if not SoundSet[3]:isStopped()
			then
			if TimeChecker%1==0 then
				SoundSet[3]:rewind()
			end
		end
		end
	end

-- deadly antivirus
	function AntiVirus()
		if Map[MeOnField_X][MeOnField_Y] == 4
		or Map[MeOnField_X][MeOnField_Y] == 8
		then
			GameOver = true
		else
			GameOver = false
		end
	end

--next level
	function NextLevel()
		if Map[MeOnField_X][MeOnField_Y] == 5 and TerminalsVisited == TerminalCondition then

				Seconds = 0
				IngameChecker = 0

				Level = Level+1

				if Level%5 == 0 then
					Difficulty = Difficulty+1
				end

				test=NameGen()
				GenerateBrandNewLevel()

			love.audio.play(SoundSet[2])
			if not SoundSet[2]:isStopped()
			then
				if TimeChecker%1==0 then
					SoundSet[2]:rewind()
				end
			end

		end
	end

--terminal visit
	function VisitTerminal()
		if Map[MeOnField_X][MeOnField_Y] == 6 then
			Map[MeOnField_X][MeOnField_Y] = 1
			TerminalsVisited = TerminalsVisited +1

			love.audio.play(SoundSet[5])
			if not SoundSet[5]:isStopped()
			then
				if TimeChecker%1==0 then
					SoundSet[5]:rewind()
				end
			end
		end
	end

--dynamic firewall

	function FirewallFill() --every possible direction becomes firewall
		for j=1,24 do
			for i=1,24 do
				if (j == Dynamic_X or i == Dynamic_Y) then
					Map[j][i] = 2
				end
			end
		end

		Map[Dynamic_X][Dynamic_Y] = 7
	end

	function FirewallClean() --every possible direction becomes empty floor
		for j=1,24 do
			for i=1,24 do
				if (j == Dynamic_X or i == Dynamic_Y) then
					Map[j][i] = 1
				end
			end
		end

		Map[Dynamic_X][Dynamic_Y] = 7
	end

	function FirewallCharge() -- directon change function (ignores if you are on the way)

		 FirewallClean() --to avoid cummulation

		Increase, Decrease = 0, 0 --variables to count

		while (MeOnField_X == Dynamic_X and DynamicDir%2==1)
		or (MeOnField_Y == Dynamic_Y and DynamicDir%2==0)
		do
			DynamicDir = math.random(10)

		end

		--preferring longer ways

		if DynamicDir%2==0 then --vertical

			for k=Dynamic_Y,1,-1 do
				Decrease=Decrease+1
			end

			for k=Dynamic_Y,24 do
				Increase=Increase+1
			end

			if Increase<Decrease then
				DynamicDir = 1
			elseif Increase>Decrease then
				DynamicDir = 2
			elseif Increase==Decrease then
				DynamicDir = 1
			end

		else --horizontal
			for k=Dynamic_X,1,-1 do
				Decrease=Decrease+1
			end

			for k=Dynamic_X,24 do
				Increase=Increase+1
			end

			if Increase<Decrease then
				DynamicDir = 3
			elseif Increase>Decrease then
				DynamicDir = 4
			elseif Increase==Decrease then
				DynamicDir = 3
			end
		end



		if DynamicDir == 1 then --up
			for k=Dynamic_Y, 1,-1 do
				Map[Dynamic_X][k] = 2
			end
		end

		if DynamicDir == 2 then --down
			for k=Dynamic_Y, 24 do
				Map[Dynamic_X][k] = 2
			end
		end

		if DynamicDir == 3 then --left
			for k=Dynamic_X, 1,-1 do
				Map[k][Dynamic_Y] = 2
			end
		end

		if DynamicDir == 4 then --right
			for k=Dynamic_X, 24 do
				Map[k][Dynamic_Y] = 2
			end
		end

		Map[Dynamic_X][Dynamic_Y] = 7

	end


--infected memory blocks spreading rule (a simple random decider)
	function GameOfCorruption()

	N=0
		for j=2,23 do
			for i=2,23 do
				chanceBorn = math.random(100)
				chanceDie = math.random(100)

				if Map[j][i] == 8 and chanceDie <10 and j ~= MeOnField_X and i ~= MeOnField_Y then
					Map[j][i] = 1
				end

				if (Map[j][i] == 1 or Map[j][i] == 3) and chanceBorn <4 and j ~= MeOnField_X and i ~= MeOnField_Y then
					Map[j][i] = 8
				end

			end
		end


	end
*/
