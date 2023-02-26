#include<stdio.h>
float AreaOfRect(float l, float b)
{
    return l*b;
}

float AreaOfSqu(float a)
{
    return a*a;;
}

float AreaOfCir(float r)
{
    float pi=3.14;
    return pi*r*r;
}

float AreaOfTri(float b1, float h)
{
    float half=0.5;
    return half*b1*h;
}

int main()
{
    int code;
    float a,r,l,b,b1,h,area;
    float pi=3.14;
    float half=0.5;
    printf("1--Circle, 2--Square, 3--Rectangle, 4--Triangle\n");
    printf("Enter the figure code for the shape\n");
    scanf("%d", &code);
    switch(code)
    {
        case '1':
          printf("Enter radius of circle\n");
          scanf("%f", &r);
          area=AreaOfCir(r);
          break;
          
        case '2':
          printf("Enter length of side of square\n");
          scanf("%f", &a);
          area=AreaOfSqu(a);
          break;
          
        case '3':
          printf("Enter length and breadth of rectangle\n");
          scanf("%f%f", &l,&b);
          area=AreaOfRect(l,b);
          break;
          
        case '4':
          printf("Enter base and height of triangle\n");
          scanf("%f%f", &b1,&h);
          area=AreaOfTri(b1,h);
          break;
          
        default:
        printf("Invalid figure code");
        return 1;
    }
    printf("The area of the shape is %f", area);
    return 0;
}