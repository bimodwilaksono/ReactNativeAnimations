#include <jni.h>
#include <string>


extern "C"
JNIEXPORT jstring JNICALL
Java_com_reactnativeanimations_StringFromJNI_stringFromJNI(JNIEnv *env, jclass clazz) {
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}