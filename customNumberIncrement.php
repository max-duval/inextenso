<?php
	$digitTab = [
		'123' => [1, 2, 3],
		'99' => [9, 9],
		'1999' => [1, 9, 9, 9],
	];

	function incrementDigitTab(int $number, array $digits): array {
			for ($i = count($digits) - 1; $i >= 0; $i--) {
				$digits[$i]++;
				if ($digits[$i] < 10) {
					return $digits;
				}

				$digits[$i] = 0;
			}
			if ($digits[0] != 0) {
				return $digits;
			}

			$result = [0 => 1] + array_combine(
				array_map(function ($key) { return ++$key; }, array_keys($digits)),
				$digits
			);

			return $result;		
	}

	// Test
	$caseOne = incrementDigitTab('99', $digitTab['99']);
	var_dump($caseOne);
	$caseTwo = incrementDigitTab('123', $digitTab['123']);
	var_dump($caseTwo);
	$caseThree = incrementDigitTab('1999', $digitTab['1999']);
	var_dump($caseThree);
