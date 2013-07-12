#ifndef _COMMONS_H_
#define _COMMONS_H_

class ISort {
	
	public:
		virtual void Sort(int *array, int length) = 0;
};

void swap(int *array, int i1, int i2);
void move(int *array, int iOld, int iNew);

#endif /* _COMMONS_H_ */