#include<stdio.h>
#include<ctime>
#include<cstdlib>

#include "algorithms/algorithms.h"

inline int randomNumber(int min, int max) {
	return rand() % (max - min + 1) + min;
}

void fillRandomArray(int* array, int length) {
	
	int min = 0, 
		max = length * 5, 
		i;

	srand((unsigned) time(0));

	for (i = 0; i < length; i++) {
		array[i] = randomNumber(min, max);
	}
}

void printArray(int* array, int length) {
	int i;

	printf("[");
	
	for (i = 0; i < length; i++) {
		
		printf("%d", array[i]);
		
		if (i < length - 1) {
			printf(", ");
		}
	}

	printf("]\n");
}

int main(int argc, char** argv) {
	int length = 20;

	ISort** algorithms = new ISort*[1];
	algorithms[0] = new BubbleSort();

	int count = 1,
		i;
	
	if (argc > 1) {
		length = atoi(argv[1]);
	}

	int* array = new int[length];

	fillRandomArray(array, length);
	printArray(array, length);
	
	for (i = 0; i < count; i++) {
		// TODO: copy array anew for each alogorithm

		printf("Sorting: \n");
		algorithms[i]->Sort(array, length);
		printArray(array, length);

		delete algorithms[i];
	}
	
	delete[] algorithms;
	delete[] array;
}