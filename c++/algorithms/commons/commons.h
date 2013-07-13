#ifndef _COMMONS_H_
#define _COMMONS_H_

class ISort {
	
	public:
		
		const char* name;
		virtual void sort(int *array, int length) = 0;

	protected:

		ISort(const char* name) {
			this->name = name;
		}
};

void swap(int *array, int i1, int i2);
void move(int *array, int iOld, int iNew);

#endif /* _COMMONS_H_ */