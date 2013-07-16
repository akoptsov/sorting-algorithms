#include <cstdio>
#include <ctime>
#include <cstdlib>
#include <cstring>

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
	int maxLength = 20,
		i;

	if (length > maxLength) {

		printf("[array output suppressed]\n");

	} else {

		printf("[");
		
		for (i = 0; i < length; i++) {
			
			printf("%d", array[i]);
			
			if (i < length - 1) {
				printf(", ");
			}
		}

		printf("]\n");
	}
}

int main(int argc, char** argv) {
	int length = 20,
		count = 5,
		i;

	ISort** algorithms = new ISort*[count];
	algorithms[0] = new BubbleSort();
	algorithms[1] = new GnomeSort();
	algorithms[2] = new SelectionSort();
	algorithms[3] = new InsertionSort();
	algorithms[4] = new QuickSort();
	
	if (argc > 1) {
		length = atoi(argv[1]);
	}

	int *base  = new int[length],
		*array = new int[length];


	fillRandomArray(base, length);
	printArray(base, length);
	
	for (i = 0; i < count; i++) {
		memcpy(array, base, length * sizeof(int));

		printf("\n");
		printf("Sorting with %s algorithm: \n", algorithms[i]->name);

		clock_t t = clock();
		algorithms[i]->sort(array, length);
		double seconds = double (clock() - t) / CLOCKS_PER_SEC;
		
		printf("Done in %lg seconds\n", seconds);
		printArray(array, length);

		delete algorithms[i];
	}
	
	delete[] algorithms;
	delete[] base;
	delete[] array;

}